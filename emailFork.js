const { fork } = require('child_process');
const forked = fork('./email.js');
forked.send({ hello: 'world' });