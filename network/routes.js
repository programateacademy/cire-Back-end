const professional = require('../components/professional/network');
const superAdmin = require('../components/superAdmin/network');
const affective = require('../components/formAffective/network');
const diagnostic = require ('../components/formDiag/network')
const kid = require('../components/kid/network');
const principalForm = require('../components/principalForm/network');
const psychoSocialForm = require('../components/psychoSocial/network');
const psychoMotorForm = require('../components/psychoMotor/network');
const segForm = require('../components/segForm/network');
const observation = require('../components/formObservation/network')
const recommendations = require ('../components/formRecommend/network')




const routes = function (server) {
  server.use('/professional', professional);
  server.use('/superAdmin', superAdmin);
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
