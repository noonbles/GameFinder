import os
import mysql.connector
import functools
from dotenv import load_dotenv
load_dotenv()

dbclient = mysql.connector.connect(host=os.getenv('HOST'), user=os.getenv('USER'), password=os.getenv('PASS'), database=os.getenv('DB'))

#for the record idk if the server works over networks; hoping it should resolve itself when i move it all to a rasp pi

def retry(func): #ill work this later but wrap this around a func and itll auto retry x times; idk which errors to handle
    return 0

class Controller:
    
    def __init__(self, tbl):
        self.cursor       = dbclient.cursor()
        self.tbl          = tbl
        
    def insert(self, attributes, values): #attrib and val r strings
        self.cursor.execute("INSERT INTO " + self.tbl + "(" + attributes + ")" + "VALUES (" + values + ")")

    def remove(self, condition): #probably wont generalize this for insert/deletion bc we only do it twice ever
        self.cursor.execute("DELETE FROM " + self.tbl + " WHERE " + condition)
    
    def isThere(self, condition): #empty = true, not empty = false
        self.cursor.execute("SELECT * FROM " + self.tbl + " WHERE " + condition)
        return bool(self.cursor.fetchall())

    def getEntries(self, entry):
        self.cursor.execute("SELECT " + entry + "FROM " + self.tbl)
        return self.cursor.fetchall()
    
    def customExecute(self, str): #this is so redundant
        self.cursor.execute(str)
        return self.cursor.fetchall()

#i swear to god if i have to change the writign bc python has dedicated obj oriented syntax i will snap a pencil