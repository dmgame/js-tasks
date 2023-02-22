function splitsTheStringIntoPairs (item) {
  const array_with_pairs = []
  let pairs = ''

  for (let i = 0; i < item.length; i++) {
    pairs += item[i]
    if (pairs.length === 2) {
      array_with_pairs.push(pairs)
      pairs = ''
    }
  }

  if (pairs) {
    array_with_pairs.push(pairs + '_')
  }

  return array_with_pairs
}

module.exports = {
  splitsTheStringIntoPairs
}
