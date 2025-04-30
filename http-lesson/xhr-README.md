# XMLHttpRequest (XHR)

## ✅ What is it?
- The original way to send HTTP requests from JavaScript.
- Introduced in Internet Explorer 5.
- Uses **callbacks** to handle success or failure.

## ⚙️ How it works:
1. You create a new XMLHttpRequest object.
2. You open a connection to a URL with `.open("GET", url)`.
3. You define what happens when the request loads or errors out using `.onload` and `.onerror`.
4. You send the request with `.send()`.

## 🔍 Where to see it:
- Open `xhr.html` in your browser.
- Click the button labeled **"Get User (XHR)"**.
- The app will contact the API and display a random user's name and picture.

## 🚫 Drawbacks:
- **Complicated and repetitive code.**
- No native support for Promises.
- You must handle success and error manually.
- Not very readable or beginner-friendly.
