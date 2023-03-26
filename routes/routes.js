const affective = require('../controller/controllerAffective');
const diagnostic = require ('../controller/controllerDiag');
const kid = require('../controller/controllerKid');
const principalForm = require('../controller/controllerPrincipalForm');
const psychoSocialForm = require('../controller/controllerPsychoSocial');
const psychoMotorForm = require('../controller/controllerPsychoMotor');
const segForm = require('../controller/controllerSegForm');
const observation = require('../controller/controllerObservation');
const recommendations = require ('../controller/controllerRecommend');


const routes = function (server) {
  server.use('/auth', require('./auth.route')),
  server.use('/professional', require('./professional.route')),
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
