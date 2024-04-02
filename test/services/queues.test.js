const app = require('../../src/app');

describe('\'queues\' service', () => {
  it('registered the service', () => {
    const service = app.service('queues');
    expect(service).toBeTruthy();
  });
});
