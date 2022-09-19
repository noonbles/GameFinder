import os
from dotenv import load_dotenv

load_dotenv()
cmds = os.getenv('PHRASE').split(", ")

def getWords(str):  #returns it in all caps
    return str.upper().split()

def concatFromArray(arr): #bc of above function, also returns in all caps
    return " ".join(arr)
    
def hasCmd(lst):
    return lst[0] in cmds #only check the first word for cmd