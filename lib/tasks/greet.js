'use strict';

module.exports = function(config) {
	process.stdout.write('Hello, ' + config.user + '!' + '\n');
};

module.exports.defaults = {
	user: '<%= package.user %>'
};

module.exports.description = 'Greet the user';
