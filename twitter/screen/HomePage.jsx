import axios from "axios";
import React, { useEffect, useState } from "react";
import { tweets_api } from "../utils/api.js";

// ✅ React Icons import
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import { FaRegHeart, FaRegComment, FaRetweet } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

export default function HomePage() {
  const [tweets, setTweets] = useState([]);
  const [text, setText] = useState("");

  const handleGetTweets = async () => {
    const res = await axios.get(tweets_api);
    setTweets(res.data.reverse());
  };

  const handlePostTweet = async () => {
    const date = new Date();
    const user = JSON.parse(localStorage.getItem("current-user"));

    const data = {
      text: text,
      user: user.email,
      createdAt: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
    };

    const res = await axios.post(tweets_api, data);

    if (res.status === 201) {
      setText("");
      handleGetTweets();
    } else {
      alert("Cannot send tweet!");
    }
  };

  useEffect(() => {
    handleGetTweets();
  }, []);

  return (
    <div className="container-fluid bg-black text-white">
      <div className="row">
        {/* LEFT SIDEBAR */}
        <div className="col-2 vh-100 border-end p-3">
          <h3 className="mb-4 text-primary">
            <FaTwitter />
          </h3>

          <ul className="list-unstyled fs-5">
            <li className="mb-3">
              <FaHome /> Home
            </li>
            <li className="mb-3">
              <FaHashtag /> Explore
            </li>
            <li className="mb-3">
              <FaBell /> Notifications
            </li>
            <li className="mb-3">
              <FaEnvelope /> Messages
            </li>
            <li className="mb-3">
              <FaUser /> Profile
            </li>
          </ul>

          <button className="btn btn-primary w-100 rounded-pill mt-3">
            Tweet
          </button>
        </div>

        {/* CENTER FEED */}
        <div className="col-6 border-end">
          {/* Tweet Input */}
          <div className="p-3 border-bottom">
            <input
              type="text"
              className="form-control bg-dark text-white border-0"
              placeholder="What's happening?" 
            
              value={text}
              onChange={(e) => setText(e.target.value)}/>

            <div className="text-end mt-2">
              <button
                onClick={handlePostTweet}
                className="btn btn-primary rounded-pill px-4">
                Tweet
              </button>
            </div>
          </div>

          {/* Tweets */}

          {tweets.map((tweet) => (
            <div key={tweet.id} className="p-3 border-bottom">
              {/* User Info */}
              <h6 className="mb-1">{tweet.user}</h6>
              <p className="mb-1">{tweet.text}</p>
              <small className="text-secondary">{tweet.createdAt}</small>

              {/* Action Buttons */}
              <div className="d-flex justify-content-between mt-3 px-3">
                {/* Comment */}
                <span style={{ cursor: "pointer" }}>
                  <FaRegComment /> 0
                </span>

                {/* Retweet */}
                <span style={{ cursor: "pointer" }}>
                  <FaRetweet /> 0
                </span>

                {/* Like */}
                <span style={{ cursor: "pointer" }}>
                  <FaRegHeart /> 0
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-4 p-3">
          <div className="bg-dark p-3 rounded">
            <h5>Trends for you</h5>
            <p>#BreakingNews</p>
            <p>#WorldNews</p>
            <p>#ReactJS</p>
            <p>#Coding</p>
          </div>
        </div>
      </div>
    </div>
  );
}
