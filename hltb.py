from howlongtobeatpy import HowLongToBeat
from commandParser import concatFromArray

async def searchGameInfo(msg, m):
    await msg.channel.send("HANG ON LEMME GO FIND THIS SHIT")
    try:
        result = await HowLongToBeat().search(concatFromArray(m).lower())[0]
    except IndexError:
        await msg.channel.send("WTF I CANT FIND THAT")
    else:   #i should probably add persistence and stuff to make it so this thing doesnt just break instantly
        await msg.channel.send("Found: " + result.game_name + "\n"
        "<"+result.game_web_link+">" + "\n")
        await msg.channel.send(
        "Main Story: " + result.gameplay_main + " " + result.gameplay_main_unit + "\n"
        "Main Story + Extra: " + result.gameplay_main_extra + " " + result.gameplay_main_extra_unit + "\n"
        "Completionist: " + result.gameplay_completionist + " " + result.gameplay_completionist_unit + "\n")