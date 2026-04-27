#Demo Video
https://github.com/user-attachments/assets/542a2787-8fc5-4498-9aec-97f1caee26f8

# 📝 Todo App (React + Redux Toolkit)

A simple and clean Todo Application built using **React** and **Redux Toolkit**.
This project demonstrates core concepts of state management, CRUD operations, and dynamic UI updates.

---

## 🚀 Features

* ➕ Add new todos
* ✏️ Update existing todos
* ❌ Remove todos
* ✅ Mark todos as completed (Done button)
* 🎨 Dynamic UI (border color changes based on status)
* ⚡ Centralized state management using Redux Toolkit

---
## 🧠 Concepts Used

* React Functional Components
* React Hooks (`useState`, `useSelector`, `useDispatch`)
* Redux Toolkit (`createSlice`, `configureStore`)
* State management (global store)
* Conditional rendering
* Event handling

---

## 📁 Project Structure

```
src/
 ├── app/
 │    └── store.js
 ├── features/
 │    └── todo_slice.js
 ├── screens/
 │    └── Todo.jsx
 ├── App.jsx
 └── main.jsx
```

---

## 🛠️ Tech Stack

* React
* Redux Toolkit
* JavaScript (ES6+)
* Bootstrap (for styling)

---

## 💡 How It Works

* Todos are stored in Redux global state
* Each todo contains:

  * `text`
  * `status` (true/false)
* Clicking **Done** sets status to true
* UI updates dynamically:

  * 🔴 Red border → Pending
  * 🟢 Green border → Completed

---

## 📌 Future Improvements

* Add LocalStorage support
* Add filtering (All / Completed / Pending)
* Add search functionality
* Improve UI/UX

---
If you like this project, give it a ⭐ on GitHub!
