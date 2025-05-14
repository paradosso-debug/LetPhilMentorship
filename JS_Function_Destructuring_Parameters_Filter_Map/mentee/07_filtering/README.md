## Filtering Arrays

`filter()` creates a new array by keeping only elements that pass a test.

**Analogy:** Like using a sieve to filter rice and leave out stones.

### Why it works:
- `filter()` takes a callback function that returns `true` or `false`.
- If it returns `true`, the item is kept in the new array.

```js
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]
```