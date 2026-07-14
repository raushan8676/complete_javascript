Events in JavaScript are actions that happen in the browser, such as:

clicking a button
typing in an input
moving the mouse
pressing a key
submitting a form


we listen to these events and run code when they happen.

```javascript
element.addEventListener("click", handler);
element.addEventListener("mouseover", handler);
element.addEventListener("keyup", handler);
element.addEventListener("input", handler);
element.addEventListener("submit", handler);
```

1. addEventListener() listens for an event
2. the event triggers a function
3. you can use the event object to get more details


Very important syntax:
```js
element.addEventListener("eventName", functionName);
```