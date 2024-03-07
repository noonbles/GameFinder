#[LIBRARIES]
import discord
from pretty_help import PrettyHelp
import os
from discord.ext import commands
from dotenv import load_dotenv

#[SET UP]
intents = discord.Intents.default()
intents.messages = True
intents.message_content = True

load_dotenv()

bot = commands.Bot(
    command_prefix='!', 
    intents=intents, 
    case_insensitive=True, 
    help_command=PrettyHelp(no_category="Commands (Case Insensitive!)", show_index=False))
    
#[COMMANDS]


    
# #[EVENTS]    
@bot.event
async def on_ready():
    await bot.get_channel(int(os.getenv('PREFERRED_CHANNEL'))).send(os.getenv("OPENER"))

#NOTE: PREFERRED_CHANNEL = channel id, OPENER = some random string message, TOKEN = static token for discordbot
        
#[INITIALIZE]
bot.run(os.getenv('TOKEN'))