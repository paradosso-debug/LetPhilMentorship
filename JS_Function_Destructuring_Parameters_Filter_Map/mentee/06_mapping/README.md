## Mapping Arrays

`map()` creates a new array by transforming every element of the original array.

**Analogy:** Like applying a filter or lens over each item in a list and getting back a new list.

### Why it works:
- `map()` takes a callback function.
- That function runs on every element and returns the new value for that position.

```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```