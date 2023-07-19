const caesarCipher = require('./caesarCipher')

test('caesarCipher', () => {
    expect(caesarCipher('Hello, World!')).toBe('Ifmmp, Xpsme!')
})

test('caesarCipher', () => {
    expect(caesarCipher('defend the east wall of the castle')).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})

test('caesarCipher', () => {
    expect(caesarCipher('Zigzag')).toBe('Ajhabh')
})