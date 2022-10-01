import sqlManager
import functools

client = sqlManager.Controller("backlog")

async def backlog(ctx): #i need to seriously reduce the amount of arguments im using; this thing gets confusing fast
    x = client.getEntries("*")
    await ctx.send("```\n" + functools.reduce(lambda a,b: a + b[0] + '\n',x,"") + "\n```") #this is temporary
    #im going to need to format this better sooner or later

async def add(ctx, *args): #this will need an additional abstraction for game duplication checks
    try:
        client.insert("name", f"'{' '.join(args)}'")
    except:
        await ctx.send('This is a duplicate.')
    else:
        await ctx.send("Done.")

async def rmv(ctx, *args):
    client.remove(f"name = '{' '.join(args)}'")
    await ctx.send("Done.")