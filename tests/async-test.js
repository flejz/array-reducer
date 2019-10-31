const assert = require('assert')
const reducer = require('../src/index')

const arr = [1, 2, 3, 4]
const asynCreate = async (a, i) => ({ ...a, [i]: Math.pow(i, 2) })
const asyncSum = async (a, i) => a + i
const promiseCreate = (a, i) => new Promise(resolve => resolve({ ...a, [i]: Math.pow(i, 2) }))
const promiseSum = (a, i) => new Promise(resolve => resolve(a + i))

describe('async', function() {
  it('should perform a async/await reduction of a simple sum', async () => {
    const summed = await reducer(arr, asyncSum, 0)
    assert.equal(summed, 10)
  })

  it('should perform a promise reduction of a simple sum', async () => {
    const summed = await reducer(arr, promiseSum, 0)
    assert.equal(summed, 10)
  })

  it('should perform a async/await reduction of an object creation', async () => {
    const obj = await reducer(arr, asynCreate, 0)
    assert.deepEqual(obj, { '1': 1, '2': 4, '3': 9, '4': 16 })
  })

  it('should perform a promise reduction of an object creation', async () => {
    const obj = await reducer(arr, promiseCreate, 0)
    assert.deepEqual(obj, { '1': 1, '2': 4, '3': 9, '4': 16 })
  })
})

