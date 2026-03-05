import React from "react";

function Contact() {
  return (
    <div className="container contact">
      <h2>Contact Me</h2>

      <form>
        <input
          type="email"
          placeholder="Enter Email"
          className="form-control my-2"
        />

        <textarea
          placeholder="Your Message"
          className="form-control my-2"
        ></textarea>

        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;