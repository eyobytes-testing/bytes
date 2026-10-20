const { add, subtract, multiply } = require('../src/math');
test('add', () => { expect(add(1, 2)).toBe(3); });
test('subtract', () => { expect(subtract(5, 3)).toBe(2); });
test('multiply', () => { expect(multiply(3, 4)).toBe(12); });
