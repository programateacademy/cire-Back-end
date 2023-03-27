const affective = require('./routeAffective');
const diagnostic = require ('./routeDiag.js');
const kid = require('./routeKid');
const principalForm = require('./routePrincipalForm.js');
const psychoSocialForm = require('./routePsychoSocial');
const psychoMotorForm = require('./routePsychoMotor');
const segForm = require('./routeSegForm');
const observation = require('./routeObservation');
const recommendations = require ('./routeRecommend');

const routes = function (server) {
  server.use('/auth', require('./auth.route'))
  server.use('/professional', require('./professional.route'))
  server.use('/affective', affective);
  server.use('/diagnostic', diagnostic)
  server.use('/kid', kid);
  server.use('/principalForm', principalForm);
  server.use('/psychoSocialForm', psychoSocialForm);
  server.use('/psychoMotorForm', psychoMotorForm);
  server.use('/segForm', segForm );
  server.use('/observation', observation);
  server.use('/recommendation', recommendations);
};

module.exports = routes;
