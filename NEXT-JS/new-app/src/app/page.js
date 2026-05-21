"use client";
import React from "react";
import { useApp } from "./context/ContextProvider.js";

export default function Home() {
  const { login, user, logout } = useApp();
  useEffect(()=>{
    login("Aman")
  },[])

  
  return <div>{user.name}</div>;
}
