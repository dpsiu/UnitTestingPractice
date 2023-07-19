import capitalize from './capitalize'

test ('Capitalizes first letter of string', () => {
    expect(capitalize('hello')).toBe('Hello')
})