const assert = require('assert')
const reducer = require('../src/index')

const arr = [1, 2, 3, 4]
const create = (a, i) => ({ ...a, [i]: Math.pow(i, 2) })
const sum = (a, i) => a + i

describe('sync', function() {
  it('should perform a sync reduction of a simple sum', () => {
    const summed = reducer(arr, sum, 0)
    assert.equal(summed, 10)
  })

  it('should perform a sync reduction of an object creation', () => {
    const obj = reducer(arr, create, {})
    assert.deepEqual(obj, { '1': 1, '2': 4, '3': 9, '4': 16 })
  })

  it('should perform a sync reduction of a simple sum without a valid array', () => {
    const summed = reducer(null, sum, 0)
    assert.equal(summed, 0)
  })
})

