const { splitsTheStringIntoPairs } = require('../src/example')

test('Expect abc => ["ab", "c_"]', () => {
  expect(splitsTheStringIntoPairs('abc')).toEqual(['ab', 'c_'])
})

test('Expect abcdef => ["ab", "cd", "ef"]', () => {
  expect(splitsTheStringIntoPairs('abcdef')).toEqual(['ab', 'cd', 'ef'])
})
