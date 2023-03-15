require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.PORT;
const db = require('./db');
const router = require('./network/routes');
const cors = require('cors');




const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json(urlencoded({extended: false})))

router(app);

db();
app.listen(PORT, () => {
  console.log('Connected to the PORT', PORT);
});
