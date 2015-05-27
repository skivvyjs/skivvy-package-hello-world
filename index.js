'use strict';

exports.tasks = {
	'greet': require('./lib/tasks/greet'),
	'welcome': require('./lib/tasks/welcome')
};

exports.defaults = {
	user: 'world'
};
