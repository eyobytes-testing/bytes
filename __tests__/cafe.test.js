const { greet, farewell, welcome } = require('../src/café');
test('greet', () => { expect(greet('World')).toBe('Hello, World!'); });
test('farewell', () => { expect(farewell('World')).toBe('Goodbye, World!'); });
test('welcome', () => { expect(welcome('World')).toBe('Welcome, World!'); });