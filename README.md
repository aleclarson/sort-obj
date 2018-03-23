# sort-obj v0.0.0

Create a *new* object by sorting the given object.

Custom comparison is supported (by key or value).

**No dependencies!**

```js
let sortObject = require('sort-obj')

let obj = {
  c: 4,
  a: 3,
  d: 2,
  b: 1,
}

// Sort keys in ascending order.
let res = sortObject(obj)
// => {a, b, c, d}

// Sort keys in descending order.
res = sortObject(obj, (a, b) => a > b ? -1 : 1)
// => {d, c, b, a}

// Sort values in ascending order.
res = sortObject(obj, (a, b, c) => c[a] < c[b] ? -1 : 1)
// => {b, d, a, c}
```

The given object is passed as the 3rd argument. This lets you
reuse the comparison function.
