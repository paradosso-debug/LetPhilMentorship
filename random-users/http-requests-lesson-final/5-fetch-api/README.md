# Fetch API

## How it works
- A modern browser API for making HTTP requests.
- Built-in Promise support.
- Syntax is **clean and powerful**.

## Problems
- Only rejects on network errors, **not** HTTP errors (like 404).
- You must manually check `response.ok`.
