//context api

//1. createContext
//2. useContext

// ? Context API

//React ka built-in feature hai jo global data sharing ke liye use hota hai.
//1️⃣ createContext
//createContext() ek Context object banata hai.
//Syntax:
//const MyContext = createContext();
//Iske andar hum data store/share karte hain.
//🔹 Example
//import { createContext } from "react";
//const UserContext = createContext();
//Yaha:
//UserContext naam ka context create hua.

//2️⃣ useContext
//useContext() hook use hota hai context ka data use karne ke liye.
//Syntax:
//const value = useContext(MyContext);