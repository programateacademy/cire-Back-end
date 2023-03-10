const professional = require('../components/professional/network');
const superAdmin = require('../components/superAdmin/network');
const Affective = require('../components/Affective/network.js')

const routes = function (server) {
  server.use('/professional', professional);
  server.use('/superAdmin', superAdmin);
  server.use('/Affective', Affective);
};

module.exports = routes;
