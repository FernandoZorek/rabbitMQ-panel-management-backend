const axios = require('axios');

/* eslint-disable no-unused-vars */
exports.Queues = class Queues {

  constructor(options, app) {
    this.options = options || {};
    this.app = app
  }

  async create (data, params) {
    const rabbitmq = this.app.get('rabbitmq');
    const rabbitURL = `http://${rabbitmq.user}:${rabbitmq.pass}@${rabbitmq.host}:${rabbitmq.port}/api/parameters/shovel/%2F`;
    const dlxQueue = data.queue.split('_dlx')[0]
    try {
      const payload = {
        'component': 'shovel',
        'name': 'MoveFrom',
        'vhost': '/',
        'value': {
          'src-protocol': 'amqp091',
          'src-uri': 'amqp://',
          'src-queue': data.queue,
          'dest-protocol': 'amqp091',
          'dest-uri': 'amqp://',
          'dest-queue': dlxQueue
        }
      };
      await axios.put(`${rabbitURL}/MoveFrom`, payload);
      return 'Sucess';
    } catch (e) {
      console.log(e);
      throw new Error('Error');
    }
  }

  async find (params) {
    const rabbitmq = this.app.get('rabbitmq');
    const rabbitURL = `http://${rabbitmq.user}:${rabbitmq.pass}@${rabbitmq.host}:${rabbitmq.port}/api/queues/%2F`;

    const queues = [
      { key: 'test_queue', name: 'Teste Queue', dlx: false },
      { key: 'test_queue_dlx', name: 'Teste Queue DLX', dlx: true },
      { key: 'test2_queue', name: 'Teste Queue', dlx: false },
      { key: 'test2_queue_dlx', name: 'Teste Queue DLX', dlx: true }
    ];

    const response = [];

    for await (let msg of queues) {
      try {
        let result = await axios.get(`${rabbitURL}/${msg.key}`);
        response.push({
          name: msg.name,
          total: result.data.messages,
          unack: result.data.messages_unacknowledged,
          ready: result.data.messages_ready,
          dlx: msg.dlx,
          queue: msg.key
        });
      } catch (e) {
        console.log('Error na fila ', msg.key, ': ', e);
      }
    }

    return response;
  }

};
