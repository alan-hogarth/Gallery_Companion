const express = require('express');
const app = express();
const parser = require('body-parser');
app.use(parser.json());
const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
