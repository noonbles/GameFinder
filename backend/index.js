const express = require("express");
const mongoose = require("mongoose");
const Game = require("./game.js");
const csv = require("csv-parser")
const fs = require("fs").promises;

const app = express();
const port = 8000;

//TODO: code cleanup jesus christ this is repetitive

// const url = "mongodb://localhost:27017/games";
const url = "mongodb://db:27017/games"

mongoose
  .connect(url, {})
  .then((result) => console.log("CONNECTED!"))
  .catch((error) => console.log(error));

app.post("/add", async (req, res) => {
  try {
    //TODO: check for dupes
    await new Game({ ...req.query }).save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete", async (req, res) => {
  try {
    //TODO: check if exists before deleting
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


//we definitely need to clean up this code below later lmao
function convertToCSV(data) {
    let csv = '';
    const headers = Object.keys(data[0]);
    csv += headers.join(',') + '\n';
    data.forEach(entry => {
      const values = headers.map(header => entry[header]);
      csv += values.join(',') + '\n';
    });
  
    return csv;
  }

app.get("/export", async (req, res) => {
  try {
    const data = await Game.find();
    const stripped_data = data
      .filter((e) => !e.completed)
      .map((e) => ({ name: e.name, priority: e.priority }));
    const file_path = "Backlog.csv";
    await fs.writeFile(file_path, convertToCSV(stripped_data));
    res.download(file_path, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error sending file");
      }
      fs.unlink(file_path, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log("HOSTING...");
});
