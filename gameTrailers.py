import os
import googleapiclient.discovery
import sqlManager
from dotenv import load_dotenv

load_dotenv()
k = os.getenv('API_KEY')
ytclient = googleapiclient.discovery.build("youtube", "v3", developerKey = k)
sqlclient = sqlManager.Controller("cache")

def cache(name):
    #find name in sql server
    vidId = sqlclient.customExecute("SELECT videoId from ") # finish this command tmrw 
    if not sqlclient.isThere("title = " + "'" + name + "'") or not sqlclient.isThere("alias = " + "'" + name + "'"):
        # case 1: none found? make entry.
        sqlclient.insert()
    else:
        return 0
   
    # case 2: found? 
        #case 2.1: name = title or alias?
            #if new alias add to entry
    return 0
        

async def search(ctx, *args):
    req = ytclient.search().list(
        part="snippet",
        type='video',
        q= " ".join(args) + " gameplay trailer",
        maxResults=1,
    )
    res = req.execute()
    #cache(args)
    await ctx.send("https://www.youtube.com/watch?v=" + res['items'][0]['id']['videoId'])