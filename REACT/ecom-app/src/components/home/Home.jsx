import React, { useEffect } from 'react'

// new..

export default function home() {
  useEffect(()=>{
  fetchProducts();
  },[]);

//async and .then 
    async function fetchProducts(){
     const rec = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        console.log(data);
    }  

  return (
    <div>
        <h1>hii</h1>
      
    </div>
  )
}
