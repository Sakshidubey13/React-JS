Redux (Redux Toolkit) Interview Questions
🔹 Basic Level
❓1. What is Redux?

👉 Redux is a state management library used to manage application state in a predictable way.

❓2. What is an Action in Redux?

👉 An action is a plain JavaScript object that describes what happened in the application.

✔ It must have a type
✔ It can have a payload

❓3. What is a Reducer?

👉 A reducer is a function that takes the current state and an action, and returns a new state.

❓4. What is a Store in Redux?

👉 The store is a central place where the entire application state is stored.

🔹 Intermediate Level
❓5. What is the difference between Action and Reducer?

👉 Action tells what to do, reducer decides how to do it.

❓6. What is the role of the Store?

👉 Store:

Holds state
Receives actions
Calls reducer
Updates UI
❓7. What is dispatch in Redux?

👉 dispatch() is a function used to send an action to the store.

dispatch({ type: "increment" });
❓8. What is meant by "single source of truth"?

👉 It means the entire application state is stored in one place (store).

❓9. Why should reducers be pure functions?

👉 Because:

Same input → same output
No side effects
Predictable behavior
🔹 Advanced Level
❓10. What is the Redux data flow?

👉 Unidirectional flow:

UI → dispatch → Action → Reducer → Store → UI update
❓11. Can we directly modify state in Redux?

👉 ❌ No (in classic Redux)
👉 ✅ Yes (in Redux Toolkit using Immer)

❓12. What is Redux Toolkit?

👉 Redux Toolkit is the official, simplified way to use Redux with less boilerplate.

❓13. What happens when an action is dispatched?

👉

Action is sent to store
Store calls reducer
Reducer returns new state
Store updates
UI re-renders
❓14. Difference between Store and Reducer?
Store	Reducer
Holds state	Updates state
Object	Function
Central data	Logic
🔥 Bonus Interview Question
❓15. Explain Redux with a real-life example

👉 Example: Food ordering system

Action → Order placed
Reducer → Chef prepares food
Store → Kitchen stores orders
