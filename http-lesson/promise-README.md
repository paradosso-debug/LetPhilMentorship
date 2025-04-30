# Promises

## ✅ What is it?
- A **Promise** is like a placeholder for a value that will come later.
- It either **resolves (success)** or **rejects (error)**.
- You can handle what happens using `.then()` and `.catch()`.

## ⚙️ How it works:
1. You fetch data from an API.
2. When the server responds, the `.then()` block runs.
3. If something goes wrong (e.g. network error), `.catch()` runs.

## 🔍 Where to see it:
- Open `promise.html` in your browser.
- It **automatically** runs the code (no button needed).
- It fetches and displays a random user using `fetch()` + `.then()`.

## 🚫 Drawbacks:
- Long chains of `.then()` can become messy.
- Still not as readable as `async/await`.
- Requires understanding of how Promises work.
