const express = require("express");
const mongoose = require("mongoose");
const Game = require("./game.js");
const cors = require('cors')
const fs = require("fs").promises;
const pinger = require("./pinger.js");

const app = express();
const port = 8000;

//TODO: code cleanup jesus christ this is repetitive

// const url = "mongodb://localhost:27017/games";
const url = "mongodb://db:27017/games"

app.use(cors({origin: '*'}));


mongoose
  .connect(url, {})
  .then(() => console.log("CONNECTED!"))
  .catch((error) => console.log(error));

async function exists(query){ //assumes query is a game object
  return (await Game.find({...query})).length > 0
}
app.get("/random", async (req, res) => {
  try{
    const randomGame = (await Game.aggregate([{ $sample: { size: 1 } }]))[0];
    res.send(randomGame)
  }catch (err){
    console.log(err)
  } 
});

app.post("/add", async (req, res) => {
  try {
    if(!(await exists(req.query)))
      await new Game({ ...req.query }).save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete", async (req, res) => {
  try {
    if(!(await exists(req.query)))
      await Game.deleteOne({ ...req.query });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

app.get("/games", async (req, res) => {
  try {
    let data = await Game.find();
    if (req.query.limit) data = data.slice(0, req.query.limit);
    const stripped_data = data
      .filter((e) => !e.completed)
      .map((e) => ({ name: e.name, priority: e.priority }));
    res.send(JSON.stringify(stripped_data));
  } catch (err) {
    console.log(err);
  }
});


function convertToCSV(data) {
  return `${Object.keys(data[0]).join(',')}\n${data.map(entry => Object.values(entry).join(',')).join('\n')}`;
}

app.get("/export", async (req, res) => {
  try {
    const data = await Game.find();
    const stripped_data = data.filter((e) => !e.completed).map((e) => ({ name: e.name, priority: e.priority }));
    const file_path = "Backlog.csv";
    await fs.writeFile(file_path, convertToCSV(stripped_data));
    res.download(file_path, (err) => {err ? res.status(500).send("Error sending file") : fs.unlink(file_path, (err) => {err && console.error(err);}); });
  } catch (err) {
    console.log(err);
  }
});

app.get("/uptime", async (req, res) => {
  try {
    pinger()
    .then((value) => {
        console.log('Received:', value);
      res.send(JSON.stringify(new Date().getTime()/1000 - value));
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  } catch (err) {
    console.log(err)
  }
})

app.listen(port, () => {
  console.log("HOSTING...");
});