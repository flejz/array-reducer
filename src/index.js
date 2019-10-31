module.exports = function(arr, f, a) {
  return !arr || !Array.isArray(arr)
    ? a
    : f.constructor.name === 'AsyncFunction'
      ? reduceAsync(arr, f, a)
      : reduce(arr, f, a)
}

function reduceAsync(arr, f, a) {
  return arr.reduce(async (p, i) => {
    return await f(await p, i)
  }, Promise.resolve(a))
}

function reduce(arr, f, a) {
  const n = [...arr]
  const i = n.shift()
  const r = f(a, i)
  return r.then
    ? reduceAsync(n, f, r)
    : n.reduce(f, r)
}
