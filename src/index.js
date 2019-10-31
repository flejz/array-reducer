module.exports = (arr, fn, acc) => {
  return fn.constructor.name === 'AsyncFunction'
    ? reduceAsync(arr, fn, acc)
    : reduce(arr, fn, acc);
}

function reduceAsync(arr, fn, acc) {
  return (arr || []).reduce(async (p, i) => {
    return await fn(await p, i)
  }, Promise.resolve(acc));
}

function reduce(arr, fn, acc) {
  const n = [...(arr || [])]
  const i = n.shift()
  const a = fn(acc, i)
  if (a.then) {
    return reduceAsync(n, fn, a)
  }
  return n.reduce(fn, a);
}
