const professional = require('../components/professional/network');
const superAdmin = require('../components/superAdmin/network');
const affective = require('../components/affective/network')

const routes = function (server) {
  server.use('/professional', professional);
  server.use('/superAdmin', superAdmin);
<<<<<<< HEAD
  server.use('/Affective', Affective);
=======
  server.use('/affective', affective);
>>>>>>> d9b02b08b5828b1a07dee9dcec32cba72b0171ad
};

module.exports = routes;
