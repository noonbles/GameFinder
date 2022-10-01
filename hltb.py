from howlongtobeatpy import HowLongToBeat

async def searchGameInfo(ctx, *args):
    await ctx.send("HANG ON LEMME GO FIND THIS SHIT")
    try:
        result = HowLongToBeat().search(' '.join(args).lower())[0]
    except IndexError:
        await ctx.send("WTF I CANT FIND THAT")
    else:   #i should probably add persistence and stuff to make it so this thing doesnt just break instantly
        await ctx.send(f'''
<{result.game_web_link}>

```fix
Found: {result.game_name} by {result.profile_dev}
Available on: {", ".join(result.profile_platforms)}
Main Story:\t \t \t \t{result.main_story} hours
Main Story + Extra: \t \t {result.main_extra} hours
Completionist:\t \t \t  {result.completionist} hours 
```
''')