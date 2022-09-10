#[LIBRARIES]
from telnetlib import theNULL
import discord
import os
from bs4 import BeautifulSoup
from howlongtobeatpy import HowLongToBeat
from dotenv import load_dotenv

#[SET UP]
load_dotenv()
client = discord.Client()

async def hltb(msg, m):
    await msg.channel.send("HANG ON LEMME GO FIND THIS SHIT")
    try:
        result = HowLongToBeat().search((" ".join(m)).lower())[0]
    except IndexError:
        await msg.channel.send("WTF I CANT FIND THAT")
    else:
        await msg.channel.send("Found: " + result.game_name + "\n"
        "<"+result.game_web_link+">" + "\n")
        await msg.channel.send("Main Story: " + result.gameplay_main + " " + result.gameplay_main_unit + "\n"
        "Main Story + Extra: " + result.gameplay_main_extra + " " + result.gameplay_main_extra_unit + "\n"
        "Completionist: " + result.gameplay_completionist + " " + result.gameplay_completionist_unit + "\n")

def getWords(str):
    return str.upper().split()

def hasCmd(lst):
    for i in lst:
        if i.find(os.getenv('PHRASE')) > -1:
            lst.remove(i)
            return True
    return False

#[EVENTS]
@client.event
async def on_message(msg):
    if msg.author == client.user:
        return
    m = getWords(msg.content)
    if hasCmd(m) and msg.channel.id == int(os.getenv('PREFERRED_CHANNEL')):
        await hltb(msg, m)
        
    
#[INITIALIZE]
client.run(os.getenv('TOKEN'))
