const professional = require('../components/professional/network');
const superAdmin = require('../components/superAdmin/network');
const affective = require('../components/Affective/network')

const routes = function (server) {
  server.use('/professional', professional);
  server.use('/superAdmin', superAdmin);
<<<<<<< HEAD
  server.use('/affective', affective);
=======
  server.use('/Affective', Affective);
>>>>>>> 6923d06f841ddb6336a20c81b5652182b8a154cb
};

module.exports = routes;
