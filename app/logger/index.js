'use strict';

/*
 Winston
 - use just like console.log, now use logger.log
 - transports option allows errors to be exported. (to file or console)
 
 Morgan
 - logs incoming http requests
 - streams right into Winston
*/

const winston = require('winston');
const logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			level: 'debug',
			json: true,
			handleExceptions: true
		})
	],
	exitOnError: false
});

module.exports = logger;