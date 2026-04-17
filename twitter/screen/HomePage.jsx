import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { tweets_api } from '../utils/api.js'

export default function HomePage() {

    const [tweets,setTweets] = useState([])
    const [text,setText] = useState("");


  const handleGetTweets = async () => {
    const res = await axios.get(tweets_api);//api call method
    setTweets(res.data.reverse);
  }

  // function create
  const handlePostTweet =async () =>{
    //get data in data base
    const date = new Date();
    const user = JSON.parse(localStorage.getItem("current-user") )
    const data = {
      text:text,
      user:user.email,
      createdAt:`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`
    }
    const res = await axios.post(tweets_api, data);
    if(res.status==201){
      alert("Tweet posted successfully !")
      handleGetTweets();
    }else{
      alert("Can not sand tweet !")
    }
  }

  //function call 
  useEffect(()=>{
    handleGetTweets()
  },[]);

  return (
    <div className='container'>
      <div>
        <input type="text" onChange={(e)=>setText(e.target.value)} placeholder='Enter your thoughts !!'/>
        <button onClick={handlePostTweet}>post</button>
      </div>
      <div>
        
        {/* display tweets  */}
        {
             tweets.map((tweet) => (
             <div key={tweet.id}>
               <h4>{tweet.user}</h4>
               <p>{tweet.text}</p>
               <p>{tweet.createdAt}</p>
             </div>
            ))
        }
      </div>
      
    </div>
  )
}
