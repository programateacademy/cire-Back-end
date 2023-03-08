const professional = require('../components/professional/network');
const superAdmin = require('../components/superAdmin/network');

const routes = function (server) {
  server.use('/professional', professional);
  server.use('/superAdmin', superAdmin);
};

module.exports = routes;
