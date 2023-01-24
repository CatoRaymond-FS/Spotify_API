//express
const express = require('express');
const app = express();
//dotenv
require('dotenv').config();
//body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3002)