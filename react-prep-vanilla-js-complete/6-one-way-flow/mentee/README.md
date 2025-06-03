# One-Way Data Flow

## 🧠 What This Teaches:
- Teaches how to pass data to a function without modifying the original object
- Introduces idea of immutable data handling

## 🔄 How This Relates to React:
- In React, props are **read-only** — children cannot change the data they receive:
  ```jsx
  function Child({ user }) {
    // Don't modify user directly
  }
  ```
- This exercise emphasizes that concept using JavaScript spread to prevent mutation.

## 🔍 Real-Life Analogy:
- Like letting a friend borrow a copy of your recipe — they can use it but shouldn’t change the original.