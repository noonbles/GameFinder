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

async function handleEndpoint(req, res, exists, action) {
  try {
    if (exists) {
      await action(req.query);
    }
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
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
  await handleEndpoint(req, res, (await exists(req.query)) === false, async query => await new Game({ ...query }).save());
});

app.delete("/delete", async (req, res) => {
  await handleEndpoint(req, res, (await exists(req.query)), async query => await Game.deleteOne({ ...query }));
});

app.put("/update", async (req, res) => {
  await handleEndpoint(req, res, true, async query => await Game.updateOne({ name: query.name }, { ...query }));
})

app.get("/games", async (req, res) => {
  try {
    const limit = req.query.limit;
    const data = await Game.find().limit(limit);
    res.json(data);
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