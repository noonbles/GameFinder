#[LIBRARIES]
import discord
from pretty_help import PrettyHelp
import os
import backlogManager as bm
# import gameTrailers as gt
from discord.ext import commands
from hltb import searchGameInfo
#from bs4 import BeautifulSoup
# from dotenv import load_dotenv

#[SET UP]
intents = discord.Intents.default()
intents.messages = True

# load_dotenv()

bot = commands.Bot(
    command_prefix='!', 
    intents=intents, 
    case_insensitive=True, 
    help_command=PrettyHelp(no_category="Commands (Case Insensitive!)", show_index=False))
    
#[COMMANDS]

@bot.command()
async def find(ctx, *args):
    """
        Looks up how long to beat the game.
    """
    await searchGameInfo(ctx, *args)
    
@bot.command()
async def search(ctx, *args): #this is redundant for now but idk how to supply them w/ preexisting funcs
    """
        Finds a game trailer for a video game.
    """
    await gt.search(ctx, *args)
    
@bot.command()
async def list(ctx):
    """
        Lists the games that are in the backlog.
    """
    await bm.backlog(ctx)
    
@bot.command()
async def add(ctx, *args):
    """
        Adds a game to the backlog.
    """
    await bm.add(ctx, *args)

@bot.command()
async def remove(ctx, *args):
    """
        Removes a game from the backlog.
    """
    await bm.rmv(ctx, *args)
    

    

    
# async def on_message(msg):
#     if msg.author == client.user:
#         return
#     m = cmd.getWords(msg.content)
#     if cmd.hasCmd(m) and msg.channel.id == int(os.getenv('PREFERRED_CHANNEL')):
#         await cmdfuncs[m.pop(0)](msg, m)
    
#[EVENTS]    
@bot.event
async def on_ready():
    await bot.get_channel(int(os.getenv('PREFERRED_CHANNEL'))).send(os.getenv("OPENER"))
        
#[INITIALIZE]
bot.run(os.getenv('TOKEN'))