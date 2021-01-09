const express = require('express');
const app = express();
const parser = require('body-parser');
app.use(parser.json());
const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

MongoClient.connect("mongodb://localhost:27017")
    .then((client)=>{
        const db = client.db("gallery");
        const objectsCollection = db.collection('objects');
        const objectsRouter = createRouter(objectsCollection);
        app.use('/api/objects', objectsRouter);
    })
    .catch(console.error);
    