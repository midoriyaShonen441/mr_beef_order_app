const express = require("express");
const cors = require("cors");
const moment = require("moment");

const pool = require("./db_connection");
// const url = require('url');
// const querystring = require('querystring');
// const Article = require('./models').Article;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

let tableNum;

//===================  set table number  ==========================//
app.get("/", async (req, res) => {
  tableNum = req.query.tableNum;
  res.send(tableNum);
});

//===================  send Menu  ==========================//
app.post("/sendMenu", async (req, res) => {
  const payload = req.body;
  const orderTime = moment().utcOffset("+07:00").format();
  await pool.getConnection().then(console.log("connected"));
  /*
        {
            tableNum: tableNum,
            karubi: Number,
            harami: Number,
            wagyu: Number,
            ribeye: Number,
            brisket: Number,
            tongue: Number,
            kurobuta: Number,
            shrimp: Number,
            shell: Number,
            mussels: Number,
            salmon: Number,
        }
    */

    try {
      console.log("connected ! connection id is " + conn.threadId);
      await conn.release(); //release to pool
      res.send("OK");
    } catch (err) {
      console.log("not connected due to error: " + err);
    }
});

module.exports = app;
