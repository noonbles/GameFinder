import os
import googleapiclient.discovery
from dotenv import load_dotenv

load_dotenv()
k = os.getenv('API_KEY')
ytclient = googleapiclient.discovery.build("youtube", "v3", developerKey = k)

async def search(msg, term):        #there's probably a cleaner way to do this. either streams or dictionaries are the way to go if u wanna optimize
    req = ytclient.search().list(
        part="snippet",
        type='video',
        q=" ".join(term) + " gameplay trailer",
        maxResults=1,
    )
    res = req.execute()
    await msg.channel.send("https://www.youtube.com/watch?v=" + res['items'][0]['id']['videoId'])