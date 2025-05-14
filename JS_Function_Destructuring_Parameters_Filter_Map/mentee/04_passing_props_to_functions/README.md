## Passing Props (Objects) to Functions

You can pass an entire object to a function instead of passing each value separately.

**Analogy:** Like handing someone a toolbox instead of each tool one by one.

### Why it works:
- Objects group related data together.
- Functions can extract needed values using dot notation or destructuring.

```js
function showUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

showUser({ name: 'Tom', age: 30 });
```