#[LIBRARIES]
import discord
import os
import commandParser as cmd
import backlogManager as bm
import gameTrailers as gt
import help as h #yes im this lazy
from hltb import searchGameInfo
#from bs4 import BeautifulSoup
from dotenv import load_dotenv


#[SET UP]
load_dotenv()
client = discord.Client()
cmds = os.getenv('PHRASE').split(", ")
    
cmdfuncs = {        #basically a bastardized switch case; also a shit way to do it; dont hard code we shouldve automated
    cmds[0]: searchGameInfo,
    cmds[1]: bm.backlog,
    cmds[2]: bm.add,
    cmds[3]: bm.rmv,
    cmds[4]: gt.search,
    cmds[5]: h.help
}

#[EVENTS]
@client.event
async def on_message(msg):
    if msg.author == client.user:
        return
    m = cmd.getWords(msg.content)
    if cmd.hasCmd(m) and msg.channel.id == int(os.getenv('PREFERRED_CHANNEL')):
        await cmdfuncs[m.pop(0)](msg, m)
        
@client.event
async def on_ready():
    await client.get_channel(int(os.getenv('PREFERRED_CHANNEL'))).send(os.getenv("OPENER"))
        
#[INITIALIZE]
client.run(os.getenv('TOKEN'))
