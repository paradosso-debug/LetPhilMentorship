# async/await

## ✅ What is it?
- A **modern, cleaner way** to work with Promises.
- Lets you write async code that looks like regular step-by-step code.
- Makes things easier to read and debug.

## ⚙️ How it works:
1. Add `async` before your function.
2. Use `await` in front of any Promise-based code.
3. Wrap the logic in a `try...catch` block to catch errors.

## 🔍 Where to see it:
- Open `async.html` in your browser.
- Click the button labeled **"Get User (async/await)"**.
- It will fetch and show a random user using `await fetch(...)`.

## 🚫 Drawbacks:
- Only works inside `async` functions.
- Still relies on Promises underneath.
