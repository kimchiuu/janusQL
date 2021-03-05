import express, {Request, Response} from "express";
import path from "path";
// const express = require('express');
// const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serves static files in our client/assets folder
app.use(express.static('client'));

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => { 
  console.log(`Listening on port ${PORT}...`);
});