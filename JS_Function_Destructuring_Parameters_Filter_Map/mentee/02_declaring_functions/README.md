## Declaring Functions

You can declare functions in multiple ways:

- Traditional way using `function` keyword
- Arrow function using `=>`

**Why it works:**

- Both define a function, but arrow functions are shorter and do not bind their own `this`.
- Use arrow functions for simpler tasks, and traditional ones when you need access to `this` or hoisting.

```js
// Traditional Function
function sayHello() {
  console.log("Hi!");
}
sayHello();

// Arrow Function
const greet = () => {
  console.log("Hello!");
};

greet();
```

# 📘 Understanding `this` in JavaScript

---

## 🔑 What is `this`?

In JavaScript, the keyword **`this`** refers to the **object that is currently executing the function**.

> Think of `this` as “**who is speaking**” in a function.  
> It changes depending on **how** and **where** the function is called.

---

## 🎭 Real-Life Analogy

Imagine you're in a play, and the actor says "I am brave!"

- Who is “I”?
- It depends on **which character** is speaking.

That’s how `this` works — it always depends on **who's calling the function**.

---

## 💡 Basic Example

```js
const person = {
  name: "Aimeé",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  },
};

person.greet(); // Output: Hi, I'm Aimeé
```
