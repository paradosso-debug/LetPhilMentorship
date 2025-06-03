# Passing Props via Function Arguments

## 🧠 What This Teaches:
- How to pass data to functions
- How to use object destructuring

## 🔄 How This Relates to React:
- In React, we pass **props** (data) to components:
  ```jsx
  <UserCard name="Jocelin" age={32} />
  ```
- Inside the component, we access it like:
  ```jsx
  function UserCard({ name, age }) { ... }
  ```
- This exercise mirrors that by accepting an object and destructuring it.

## 🔍 Real-Life Analogy:
- Like handing a list of ingredients to a chef, and they prepare the dish using only what you gave them.