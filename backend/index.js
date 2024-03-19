const express = require('express')
const mongoose = require('mongoose')
const Game = require('./game.js')

const app = express()
const port = 8000

//TODO: code cleanup jesus christ this is repetitive

// const url = "mongodb://localhost:27017/games"
const url = "mongodb://db:27017/Games"

mongoose.connect(url, {}).then(result => console.log("CONNECTED!")).catch(error => console.log(error))

app.post('/add', async (req, res) => {
    console.log(req.query)
    try{
        await (new Game({...req.query})).save()
        res.sendStatus(200)
    }catch(err){
        console.log(err)
    }
})

app.delete('/delete', async (req, res) => {
    console.log(req.query) //this should just be the game's name, formatted in form of HowLongToBeat.com
    try{
        const data = await Game.deleteOne({ ... req.query})
        console.log(data)
        res.sendStatus(200)
    }catch(err){
        console.log(err)
    }
})

app.get('/games', async (req, res) => {
    try{
        //TODO: add flag to check if want to export; if so then do logic here
        const data = await Game.find()
        const stripped_data = data.map(e => ({name: e.name}))
        res.send(JSON.stringify(stripped_data))
        
    }catch(err){
        console.log(err)
    }
})

app.listen(port, () => { console.log("HOSTING...") })