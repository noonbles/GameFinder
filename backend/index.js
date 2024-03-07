const express = require('express')
const mongoose = require('mongoose')
const Game = require('./game.js')

const app = express()
const port = 8000

// const url = "mongodb://localhost:27017/games"
const url = "mongodb://db:27017/Games"

mongoose.connect(url, {}).then(result => console.log("CONNECTED!")).catch(error => console.log(error))

app.post('/add', async (req, res) => {
    console.log(req.query)
    try{
        await (new Game({...req.query})).save()
        res.sendStatus(200)
    }catch(err){
        error(err)
    }
})

app.get('/games', async (req, res) => {
    //TODO: add more endpoints 💀
})

app.listen(port, () => { console.log("HOSTING...") })