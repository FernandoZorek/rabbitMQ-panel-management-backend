// Initializes the `queues` service on path `/queues`
const { Queues } = require('./queues.class');
const hooks = require('./queues.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/queues', new Queues(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('queues');

  service.hooks(hooks);
};
