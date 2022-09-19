import os
import mysql.connector
import functools
from dotenv import load_dotenv
from commandParser import concatFromArray
load_dotenv()

dbclient = mysql.connector.connect(host=os.getenv('HOST'), user=os.getenv('USER'), password=os.getenv('PASS'), database=os.getenv('DB'))

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