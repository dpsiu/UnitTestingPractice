const calculator = require('./calculator')

test('Add, Subtract, Divide, Multiply', () => {
    expect(calculator(2, 5)).toBe('Add: 7 Subtract: -3 Divide: 0.4 Multiply: 10')
})