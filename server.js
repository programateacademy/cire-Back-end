require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3030;
const db = require('./db');
const router = require('./routes/routes');
const cors = require('cors');

// const { api } = require('./apiv1');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})) //
// app.use('/api',api);
router(app);


db();
app.listen(PORT, () => {
  console.log('Connected to the PORT', PORT);
});
