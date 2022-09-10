#[LIBRARIES]
import discord
import os
from bs4 import BeautifulSoup
from howlongtobeatpy import HowLongToBeat
from dotenv import load_dotenv
load_dotenv()

client = discord.Client()



#[EVENTS]
@client.event
async def on_message(msg):
    if msg.author == client.user:
        return
    if (msg.content.find(os.getenv('PHRASE')) > -1):
        await msg.channel.send("HANG ON LEMME GO FIND THIS SHIT")
        result = HowLongToBeat().search("Stray")[0]
        await msg.channel.send("BRUH THIS TAKES " + result.gameplay_main + " HOURS TO BEAT??!?!?!?!")
# @client.event
# async def on_ready():
#     print("IT LIVES!!!")
    
#[INITIALIZE]
client.run(os.getenv('TOKEN'))
