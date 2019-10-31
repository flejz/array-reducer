# reduce-promise

![code coverage][shield-coverage]
![file size][shield-size]
![version][shield-release]

[shield-coverage]: https://img.shields.io/badge/coverage-100%25-success
[shield-size]: https://img.shields.io/github/size/flejz/array-reducer/src/index.js
[shield-release]: https://img.shields.io/github/v/release/flejz/array-reducer

Never carry anymore about async reduce an array.
Install with:

```sh
npm i array-reducer
```

Start requiring and then make the magic happen

```javascript
const reducer = require('array-reducer')
```

You might need 3 arguments:

```javascript
reducer(array, fn, acc)
```

* `array` might be an array of whatever you want
* `fn` is your reducer function. Here you can go async or sync, doesn't matter
* `acc` is the default accumulator value for your reducer function `fn`

## Samples

You might use reducers the way you want withouth carying if the reducer function shall fetch something from the *database*, make an external *api call* or a simple sum.

### async/await

Make things meaningful, avoid promise/callback hell!

```javascript
const reducer = require('array-reducer')

const arr = [1, 2, 3, 4]
const sum = async (n, m) => n + m

const result = await reducer(arr, sum, 0)
console.log(result) // 10
```

### promise

Connect in a promise chain

```javascript
const reducer = require('array-reducer')

const arr = [1, 2, 3, 4]
const sum = (n, m) => new Promise(resolve => resolve(n + m))

reducer(arr, sum, 3).then((result) => {
  console.log(result)  // 13
})
```

### standard/sync

Go simple

```javascript
const reducer = require('array-reducer')

const arr = [1, 2, 3, 4]
const sum = (n, m) => n + m

const result = reducer(arr, sum, 5)
console.log(result) // 15
```

## Go beyond! Go fancy!

It's not only about numbers or aggregations, we can go further.

```javascript
const reducer = require('array-reducer')

const arr = [['drink', 'beer'], ['eat', 'hotdog']]
const toObject = (obj, [prop, value]) => ({
  ...obj,
  [prop]: value,
})

const result = reducer(arr, toObject, {})
console.log(result) // { drink: 'beer', eat: 'hotdog' }

```