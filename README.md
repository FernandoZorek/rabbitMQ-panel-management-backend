# Rabbit MQ Panel Management Backend
## _rabbitMQ-panel-management-backend_

> The Rabbit MQ Panel Management Backend is a
> REST API service built using Feathers.js that
> allows you to manipulate RabbitMQ actions.
> It provides endpoints for managing queues and
> moving messages between dead-letter queues (DLX)
> and regular queues.

## Features

- Connect rabbitmq;
- List queues rabbitmq;
- Move messages from DLX to respective queue;

## Tech

This project uses several open source projects to function correctly::

- [Docker] - Platform for developing, shipping, and running applications using containerization;
- [Nginx] - Advanced Load Balancer, Web Server, Reverse Proxy;
- [Node.js] - JavaScript runtime built on Chrome’s V8 JavaScript engine;
- [Express.js] - Fast, unopinionated, minimalist web framework for Node.js;
- [Feathers.js] - The API and Real-time Application Framework;
- [Rabbit MQ] - RabbitMQ is a reliable and mature messaging and streaming broker, which is easy to deploy on cloud environments, on-premises, and on your local machine;

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v20+ to run.

Install the dependencies and devDependencies and start the server.

```bash
yarn
```
### Open hosts file:

```sh
sudo nano /etc/hosts
```

### Add new line:

```sh
127.0.0.1       frontend
```
### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
docker-compose up
```

### Usage
##### List Queues
**Endpoint:** GET /queues
**Description:** Retrieves a list of queues along with their details.
**Response:**
```sh
[
  {
    "name": "Teste Queue",
    "total": 0,
    "unack": 0,
    "ready": 0,
    "dlx": false,
    "queue": "test_queue"
  },
  {
    "name": "Teste Queue DLX",
    "total": 0,
    "unack": 0,
    "ready": 0,
    "dlx": true,
    "queue": "test_queue_dlx"
  },
  // ... other queues
]
```

##### Move Message from DLX to Regular Queue
**Endpoint:** POST /queues/move
**Description:** Moves a message from a dead-letter queue (DLX) to a regular queue.
**Request Body:**
```sh
{
  "queue": "test2_queue_dlx"
}
});
```


## License

MIT
**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
[Docker]: <https://docs.docker.com/>
[Nginx]: <https://www.nginx.com/>
[Node.js]: <https://nodejs.org/docs/latest/api/>
[Feathers.js]: <https://feathersjs.com/api/>
[Express.js]: <https://expressjs.com/en/guide/routing.html>
[Rabbit MQ]: <https://www.rabbitmq.com/>

