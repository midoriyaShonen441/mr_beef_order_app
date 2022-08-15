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
  /*
    {
    "table_no": 1,
    "order": [
        { 
            "menu_id": 1,
            "qty": 1
        }
    ]
}
  */

  const payload = req.body;
  const orderTime = moment().utcOffset("+07:00").format();
  const conn = await pool.getConnection();

  try {
    console.log("connected ! connection id is " + conn.threadId);
    conn.query(
      
    )
    res.send("OK");
  } catch (err) {
    console.log("not connected due to error: " + err);
  } finally {
    await conn.release();
  }
});

module.exports = app;
