# Reusable Components via Functions

## 🧠 What This Teaches:
- How to use JavaScript functions to create reusable DOM structures
- How to dynamically inject HTML using JavaScript

## 🔄 How This Relates to React:
- This simulates React **components**, which are reusable functions that return JSX.
- In React, we use:
  ```jsx
  function UserCard(props) {
    return <div>{props.name}</div>;
  }
  ```
- In this exercise, the `createUserCard(name, age)` function is like a React component returning JSX.

## 🔍 Real-Life Analogy:
- Like using a cookie cutter to make the same shape repeatedly, but with different dough each time.