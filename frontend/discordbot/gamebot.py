#[LIBRARIES]
import discord
from pretty_help import PrettyHelp
import os
import requests
from discord.ext import commands
from dotenv import load_dotenv
from howlongtobeatpy import HowLongToBeat

#[SET UP]
intents = discord.Intents.default()
intents.messages = True
intents.message_content = True

load_dotenv()

backend = "http://db:8000"
# backend = "http://localhost:8000"

bot = commands.Bot(
    command_prefix='!', 
    intents=intents, 
    case_insensitive=True,
    help_command=PrettyHelp(no_category="Commands (Case Insensitive!)", show_index=False))

async def isThisAGame(args):
    name = ' '.join(args).lower()
    results_list = await HowLongToBeat().async_search(name)
    if results_list is not None and len(results_list) > 0:
        best_element = max(results_list, key=lambda element: element.similarity)
        return best_element
    else:
        Exception

    
#[COMMANDS]

@bot.command()
async def add(ctx, *args):
    '''Adds a given game to the backlog.'''    
    try:
        print(ctx, *args)
        game = await isThisAGame(args)
        params = {
            "name": game.game_name,
        }
        requests.post(f"{backend}/add", params=params)
        await ctx.send(f'`{game.game_name}` has been added to the backlog.')    

    except:
        await ctx.send('Game not found on `HowLongToBeat.com`.')
        
    #this is prone to error rn
        
@bot.command()
async def delete(ctx, *args):
    '''Deletes a given game from the backlog'''
    try:
        print(ctx, *args)
        game = await isThisAGame(args)
        params = {
            "name" : game.game_name,
        }
        requests.delete(f"{backend}/delete", data=params) #we dont actually have an endpoint for this yet lol
        await ctx.send(f'`{game.game_name}` has been added to the backlog.')

    except:
        await ctx.send('Game not found in backlog.')
@bot.command()
async def log(ctx):
    '''Shows the backlog'''


@bot.command()
async def about(ctx, *args):
    '''Gets information on a given game via their name and looks it up on HowLongToBeat.com'''
    try:
        print(ctx, *args)
        entry = await isThisAGame(args)
        message = f'''\
            ```yaml
            {'='*40}
            {'Game Name:':<20} {entry.game_name}
            {'Alias:':<20} {entry.game_alias}
            {'Type:':<20} {entry.game_type}
            {'Review Score:':<20} {entry.review_score}
            {'Developer:':<20} {entry.profile_dev}
            {'Platforms:':<20} {', '.join(entry.profile_platforms)}
            {'Release Year:':<20} {entry.release_world}
            {'Similarity:':<20} {entry.similarity}
            {'Main Story (Hours):':<20} {entry.main_story}
            {'Main + Extra (Hours):':<20} {entry.main_extra}
            {'Completionist (Hours):':<20} {entry.completionist}
            {'All Styles (Hours):':<20} {entry.all_styles}
            {'='*40}```
            {entry.game_web_link}
            '''
        await ctx.send(message)

    except:
        await ctx.send('Game not found on `HowLongToBeat.com`.')

    
# #[EVENTS]    
@bot.event
async def on_ready():
    await bot.get_channel(int(os.getenv('PREFERRED_CHANNEL'))).send(os.getenv("OPENER"))

#NOTE: PREFERRED_CHANNEL = channel id, OPENER = some random string message, TOKEN = static token for discordbot
        
#[INITIALIZE]
bot.run(os.getenv('TOKEN'))