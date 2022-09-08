import discord
import os
from dotenv import load_dotenv



client = discord.Client()





#[EVENTS]
@client.event
async def on_message(msg):
    if msg.author == client.user:
        return

@client.event
async def on_ready():
    print("IT LIVES!!!")
    
#[INITIALIZE]
client.run(os.getenv('TOKEN'))
