'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('task:greet', function() {
	var mockApi;
	var task;
	before(function() {
		mockApi = createMockApi();
		task = require('../../lib/tasks/greet');
	});

	function createMockApi() {
		return {
			errors: {
				TaskError: createCustomError('TaskError')
			}
		};

		function createCustomError(type) {
			function CustomError(message) {
				this.message = message;
			}

			CustomError.prototype = Object.create(Error.prototype);
			CustomError.prototype.name = type;

			return CustomError;
		}
	}

	it('should have a description', function() {
		expect(task.description).to.be.a('string');
	});

	it('should specify default configuration', function() {
		expect(task.defaults).to.eql({
			user: '<%= package.user %>'
		});
	});

	it('should greet the user', function() {
		var originalLog = process.stdout.write;
		var logOutput = [];
		process.stdout.write = function mock(string) {
			logOutput.push(string);
		};
		try {
			task.call(mockApi, { user: 'foobar' });
		} finally {
			process.stdout.write = originalLog;
		}
		expect(logOutput).to.eql(['Hello, foobar!\n']);
	});
});
