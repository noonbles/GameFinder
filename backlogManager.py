import sqlManager
import functools
import cacheSystem

client = sqlManager.Controller("backlog")

async def backlog(ctx): #i need to seriously reduce the amount of arguments im using; this thing gets confusing fast
    x = client.getEntries("*")
    await ctx.send('```' + functools.reduce(lambda a,b: a + b[0] + "\n",x,"") + '```') #this is temporary
    #im going to need to format this better sooner or later

async def add(ctx, *args): #this will need an additional abstraction for game duplication checks
    if cacheSystem.isGame(cacheSystem.getSearchResult(' '.join(args))): #this needs to be optimized horribly please fix
        try:
            client.insert("name", f"'{' '.join(args)}'") #this needs to insert the proper title and not just the string input
        except:
            await ctx.send('This is a duplicate.')
        else:
            await ctx.send("Done.")
    else:
        await ctx.send("this aint a game mf")
        
async def rmv(ctx, *args):
    client.remove(f"name = '{' '.join(args)}'")
    await ctx.send("Done.")