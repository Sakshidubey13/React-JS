import React from "react";
import { ReactTyped } from "react-typed";

import github from "../assets/github.png";
import linkedin from "../assets/Linkdin.png";
import twitter from "../assets/Twitter.png";
import leetcode from "../assets/Leetcode.png";
import profile from "../assets/Profile.png";

const Hero = () => {
  const socialIcons = [
    { icon: github, link: "https://github.com/Sakshidubey13" },
    {
      icon: linkedin,
      link: "https://www.linkedin.com/in/sakshi-dubey-7034bb381/",
    },
    { icon: twitter, link: "https://x.com/SakshiDubey1304" },
    { icon: leetcode, link: "https://leetcode.com/u/Sakshiiidubey/" },
  ];

  return (
    <section className="h-screen flex items-center justify-center text-white relative z-10 px-10">
      {/* Main Container */}
      <div className="flex items-center justify-between w-full max-w-7xl">
        {/* LEFT SIDE TEXT */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-orange-500">Sakshi</span>
            <span>Dubey</span>
          </h1>

          <h2 className="text-2xl mb-6">
            <ReactTyped
              strings={[
                "MERN Stack Developer",
                "Full Stack Developer",
                "React Developer",
              ]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1500}
              loop
            />
          </h2>

          <p className="max-w-xl text-gray-300 mb-6">
            Passionate Full Stack Developer creating modern and responsive web
            applications using MERN stack.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            {socialIcons.map((item, index) => (
              <a key={index} href={item.link}>
                <img
                  src={item.icon}
                  alt="social"
                  className="w-8 hover:scale-125 transition"
                />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative flex justify-center items-center">
          {/* Soft Gradient Glow */}
          <div
            className="absolute w-[350px] h-[350px]
      bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-400
      rounded-full opacity-40 blur-3xl"
          ></div>

          {/* Clean Profile Image */}
          <img
            src={profile}
            alt="profile"
            className="relative w-[380px] h-[380px] rounded-full object-cover  shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
