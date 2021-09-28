const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  'mongodb+srv://newUser:123ronco@game.cxct1.mongodb.net/game?retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("baseOnline");
    }
  }
);

app.use(cors());
app.use(bodyParser.json())

app.set("port", process.env.PORT || 8080);

app.get("/", (req, res) => {
  res.send("Amiga, funciona, fuaaaa");
});

app.use(require("./routes/users.routes"));

module.exports = app;
