import os
from dotenv import load_dotenv
load_dotenv()

async def help(msg, m):
    message = '''
```
MANUAL [NONE OF THESE COMMANDS ARE CASE SENSITIVE]
!Search (name): Searches for the game trailer of a given name
!Help: Sends the manual
!List: Sends the backlog of games
!Add (name): Adds a given name from the backlog 
!Remove (name): Removes a given name from the backlog
```
    '''
    await msg.channel.send(message)