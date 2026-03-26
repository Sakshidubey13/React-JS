
import React from "react"; 
// React library import (JSX use karne ke liye)

import ReactDOM from "react-dom/client"; 
// React ko browser DOM me render karne ke liye

import App from "./App"; 
// App component import (main component)

import "bootstrap/dist/css/bootstrap.min.css"; 
// Bootstrap CSS import (UI styling ke liye)

// Root element me React app render kar rahe hain
ReactDOM.createRoot(document.getElementById("root")).render(
  <App /> // App component render ho raha hai
);