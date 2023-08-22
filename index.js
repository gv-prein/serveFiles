import express from "express";
import fs from "fs";

const app = express();

app.get('/users', (req, res) => {
    fs.readFile('./users.json', 'utf8', (err, data) => {
      if (err) throw err;
      const users = JSON.parse(data).users;
      res.send(users);
    });
  });