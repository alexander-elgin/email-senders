const getSender = require('./engines/sendinblue');

module.exports = (engine, credentials) => getSender(credentials);
