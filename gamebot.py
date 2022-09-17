#[LIBRARIES]
from ast import Str
from telnetlib import theNULL
from xml.etree.ElementTree import tostring
import discord
import os
#from bs4 import BeautifulSoup
from howlongtobeatpy import HowLongToBeat
from dotenv import load_dotenv
import mysql.connector
import googleapiclient.discovery
import functools


#[SET UP]
load_dotenv()
client = discord.Client()
cmds = os.getenv('PHRASE').split(", ")
k = os.getenv('API_KEY')
ytclient = googleapiclient.discovery.build("youtube", "v3", developerKey = k)
dbclient = mysql.connector.connect(host=os.getenv('HOST'), user=os.getenv('USER'), password=os.getenv('PASS'), database=os.getenv('DB'))

async def hltb(msg, m):
    await msg.channel.send("HANG ON LEMME GO FIND THIS SHIT")
    try:
        result = await HowLongToBeat().search(concatFromArray(m).lower())[0]
    except IndexError:
        await msg.channel.send("WTF I CANT FIND THAT")
    else:   #i should probably add persistence and stuff to make it so this thing doesnt just break instantly
        await msg.channel.send("Found: " + result.game_name + "\n"
        "<"+result.game_web_link+">" + "\n")
        await msg.channel.send(
        "Main Story: " + result.gameplay_main + " " + result.gameplay_main_unit + "\n"
        "Main Story + Extra: " + result.gameplay_main_extra + " " + result.gameplay_main_extra_unit + "\n"
        "Completionist: " + result.gameplay_completionist + " " + result.gameplay_completionist_unit + "\n")

async def backlog(msg, m): #i need to seriously reduce the amount of arguments im using; this thing gets confusing fast
    c = dbclient.cursor()
    c.execute("SELECT * FROM backlog") #this is a horrid way to do this. oh well!
    x = c.fetchall()
    await msg.channel.send("```\n" + functools.reduce(lambda a,b: a + b[0] + '\n',x,"") + "\n```") #this is temporary
    #im going to need to format this better sooner or later

async def add(msg, m): #ill need to rewrite all of this later so that its actually clean and not hard coded and disgusting
    c = dbclient.cursor()
    c.execute("INSERT INTO backlog(name) values " + '(' + "'" + concatFromArray(m) + "'" + ')')
    await msg.channel.send("DONE")

async def rmv(msg, m): #i could probably abstract this func and the add func...
    c = dbclient.cursor()
    c.execute("DELETE FROM backlog where name = " + "'" + concatFromArray(m) + "'")
    await msg.channel.send("DONE")

def getWords(str):  #returns it in all caps
    return str.upper().split()

def concatFromArray(arr): #bc of above function, also returns in all caps
    return " ".join(arr)
    
def hasCmd(lst):
    return lst[0] in cmds #only check the first word for cmd

async def search(msg, term):        #there's probably a cleaner way to do this. either streams or dictionaries are the way to go if u wanna optimize
    req = ytclient.search().list(
        part="snippet",
        type='video',
        q=" ".join(term) + " gameplay trailer",
        maxResults=1,
    )
    res = req.execute()
    await msg.channel.send("https://www.youtube.com/watch?v=" + res['items'][0]['id']['videoId'])
    
cmdfuncs = {        #basically a bastardized switch case; also a shit way to do it; dont hard code we shouldve automated
    cmds[0]: hltb,
    cmds[1]: backlog,
    cmds[2]: add,
    cmds[3]: rmv,
    cmds[4]: search
}

#[EVENTS]
@client.event
async def on_message(msg):
    if msg.author == client.user:
        return
    m = getWords(msg.content)
    if hasCmd(m) and msg.channel.id == int(os.getenv('PREFERRED_CHANNEL')):
        await cmdfuncs[m.pop(0)](msg, m)
        
#[INITIALIZE]
client.run(os.getenv('TOKEN'))
