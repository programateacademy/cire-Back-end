const professional = require('../components/professional/network');
const superAdmin = require('../components/superAdmin/network');
const affective = require('../components/affective/network')

const routes = function (server) {
  server.use('/professional', professional);
  server.use('/superAdmin', superAdmin);
  server.use('/affective', affective);
};

module.exports = routes;
