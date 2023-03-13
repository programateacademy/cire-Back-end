const professional = require('../components/professional/network');
const superAdmin = require('../components/superAdmin/network');
const affective = require('../components/formAffective/network');
const diagnostic = require ('../components/formDiag/network')
const kid = require('../components/kid/network');
const principalForm = require('../components/principalForm/network');
const psychoSocialForm = require('../components/psycoSocial/network')


const routes = function (server) {
  server.use('/professional', professional);
  server.use('/superAdmin', superAdmin);
  server.use('/affective', affective);
  server.use('/diagnostic', diagnostic)
  server.use('/kid', kid);
  server.use('principalForm', principalForm);
  server.use('psychoSocialForm', psychoSocialForm);

};

module.exports = routes;
