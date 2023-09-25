const express = require("express");
// var cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const fs = require("fs");
const port = 3000;

// app.use(cors())

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/sb_menu", (req, res) => {
  // starbucks_menu.json 파일을 읽어옴
  fs.readFile("starbucks_menu.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // JSON 형식의 데이터를 클라이언트에게 반환
      res.setHeader("Content-Type", "application/json");
      res.send(data);
    }
  });
});

app.get("/ed_menu", (req, res) => {
  // ediya_menu.json 파일을 읽어옴
  fs.readFile("ediya_menu.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // JSON 형식의 데이터를 클라이언트에게 반환
      res.setHeader("Content-Type", "application/json");
      res.send(data);
    }
  });
});

app.get("/m_menu", (req, res) => {
  // mega_menu.json 파일을 읽어옴
  fs.readFile("mega_menu.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // JSON 형식의 데이터 반환
      res.setHeader("Content-Type", "application/json");
      res.send(data);
    }
  });
});

app.get("/p_menu", (req, res) => {
  // paik_menu.json 파일을 읽어옴
  fs.readFile("paik_menu.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // JSON 형식의 데이터 반환
      res.setHeader("Content-Type", "application/json");
      res.send(data);
    }
  });
});

app.get("/h_menu", (req, res) => {
  // hollys_menu.json 파일을 읽어옴
  fs.readFile("hollys_menu.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // JSON 형식의 데이터 반환
      res.setHeader("Content-Type", "application/json");
      res.send(data);
    }
  });
});

app.get("/p_info", (req, res) => {
  // paik_info.json 파일을 읽어옴
  fs.readFile("paik_info.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // JSON 형식의 데이터 반환
      res.setHeader("Content-Type", "application/json");
      res.send(data);
    }
  });
});

app.listen(3000);
