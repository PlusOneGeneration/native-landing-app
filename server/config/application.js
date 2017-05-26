let Application = require('plus.application');

let application = new Application({
    dir: __dirname,
    env: process.env.NODE_ENV || 'dev'
});

module.exports = application;