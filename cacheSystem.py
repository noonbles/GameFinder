import requests
import os
import functools
import sqlManager
from difflib import SequenceMatcher
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("API_KEY")

sqlclient = sqlManager.Controller('cache')
#ENGINE  = os.getenv("SEARCH_ENGINE_ID")
#url = f"https://www.googleapis.com/customsearch/v1?key={API_KEY}&cx={ENGINE}&q={query + 'wikipedia'}&start={1}"
# def isGame(name):
#     return getSearchResult(name)['items'][0]['snippet'].find('game') > -1

def getSearchResult(query):
    url = f"https://kgsearch.googleapis.com/v1/entities:search?query={query}&key={API_KEY}&limit=5&indent=True"
    return requests.get(url).json()

def isGame(json):
    for i in json['itemListElement']:
        if i['result']['description'].find('game'):
            return True
    return False
        
def getName(json, name):
    bestMatch = ""
    ratio = SequenceMatcher(None, name, bestMatch).ratio()
    for i in json['itemListElement']:
        if ratio <= SequenceMatcher(None, name, i['result']['name']).ratio():
            bestMatch = i['result']['name']
    return bestMatch
            
def cacheLookUp(name):
    return sqlclient.customExecute(f"SELECT videoId from cache, aliases where alias='{name}'")
    
def cacheInsert(name, title, id):
    sqlclient.customExecute(f"insert into cache(title, videoId) values ('{title}', '{id}')")
    sqlclient.customExecute(f"insert into aliases(alias, title) values ('{name}','{title}')")
        
# x = getSearchResult("ffxv")

# print(getName(x, "ff15"))

# for i in x['itemListElement']:
#     y=i['result']['name']
#     z=i['result']['description']
#     print(y)
#     print(z.find('game'))
