const express = require('express');

// importing dotenv with evironment variables
require('dotenv').config();

// instantiating express
const app = express();

const http = require('http');

// instantiating http
const sever = http.createServer(app);

// importing routes
const routes = require('./routes/routes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// adding routes
app.use(routes);

// server listener
sever.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})