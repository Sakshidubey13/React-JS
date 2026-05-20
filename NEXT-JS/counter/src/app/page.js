"use client";

import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  // Increment Function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Function
  const decrement = () => {
    setCount(count - 1);
  };

  const multipication = () => {
    setCount(count * 2);
  };

  const divide = () => {
    setCount(count / 2);
  };

  return (
    <div className="h-screen bg-amber-200 flex justify-center items-center flex-col">
      {/* Heading */}
      <h1 className="text-amber-900 text-4xl m-5 font-bold">Counter App</h1>

      {/* Counter Number */}
      <h1 className="text-blue-950 text-7xl m-8 font-semibold">{count}</h1>

      {/* Buttons Container */}
      <div className="flex gap-6">
        {/* Increment Button */}
        <button
          onClick={increment}
          className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-r from-green-500 to-emerald-700 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-500 hover:scale-105"
        >
          <span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
          <span className="relative z-10">Increment +</span>
        </button>

        {/* Decrement Button */}
        <button
          onClick={decrement}
          className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-r from-red-500 to-pink-700 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-500 hover:scale-105"
        >
          <span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
          <span className="relative z-10">Decrement -</span>
        </button>

        {/* multipication  Button */}
        <button
          onClick={multipication}
          className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-r from-green-500 to-emerald-700 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-500 hover:scale-105"
        >
          <span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
          <span className="relative z-10">Multipication * 2</span>
        </button>

        {/* divide Button */}
        <button
          onClick={divide}
          className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-r from-red-500 to-pink-700 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-500 hover:scale-105"
        >
          <span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
          <span className="relative z-10">Divide / 2</span>
        </button>
      </div>
    </div>
  );
}
