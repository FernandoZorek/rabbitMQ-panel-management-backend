const queues = require('./queues/queues.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(queues);
};
