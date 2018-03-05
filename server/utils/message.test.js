var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var message = generateMessage('Paul', 'Hello');
		expect(message.from).toBe('Paul');
		expect(message.text).toBe('Hello');
		expect(message.createdAt).toBeA('number');
	});
});