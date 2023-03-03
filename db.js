const db = require('mongoose');

db.Promise = global.Promise;
db.set('strictQuery', true);

async function connect () {
  const MONGO_URI = process.env.MONGO_URI;
  await db.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected successfuly'))
    .catch(err => console.error('DB', err));
};

module.exports = connect;
