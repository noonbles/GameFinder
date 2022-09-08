import discord
import os


client = discord.client()

@client.event
async def on_message(msg):
    if msg.author == client.user:
        return

client.run('MTAxNzUxOTExMTk5MzA1MzE4NA.G8bZuE.f_nK55X2gEwKZWBsDYz8051c1ePzGcPLwxjdwc')
