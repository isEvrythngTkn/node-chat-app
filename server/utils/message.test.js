var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var message = generateMessage('Paul', 'Hello');
		expect(message.from).toBe('Paul');
		expect(message.text).toBe('Hello');
		expect(message.createdAt).toBeA('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var message = generateLocationMessage('Paul', 1, 2);
		expect(message.from).toBe('Paul');
		expect(message.url).toBe('https://www.google.com/maps?q=1,2');
		expect(message.createdAt).toBeA('number');
	});
});