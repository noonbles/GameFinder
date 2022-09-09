#[LIBRARIES]
import discord
import os
from bs4 import BeautifulSoup
from dotenv import load_dotenv
load_dotenv()

client = discord.Client()



#[EVENTS]
@client.event
async def on_message(msg):
    if msg.author == client.user:
        return
    if msg.content == os.getenv('PHRASE') and msg.channel == os.getenv("PREFERRED_CHANNEL"):
        await msg.channel.send("I AM HERE AND I AM READY TO BANG")
@client.event
async def on_ready():
    print("IT LIVES!!!")
    
#[INITIALIZE]
client.run(os.getenv('TOKEN'))
