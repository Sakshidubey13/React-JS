import React from "react";

const Header = ({ aadityaMobile, email, onContactChange }) => {
  return (
    <div className="header-container sticky-top no-print">
      <div className="header-top">
        <div className="logo">🌟</div>
        <div className="main-title">
          <h1>THE GALAXY LIVE MAHAVASTU</h1>
        </div>
        <div className="contact-info">
          <div>
            <label>Aaditya Kumar</label>
            <input
              type="tel"
              name="aadityaMobile"
              value={aadityaMobile}
              onChange={onContactChange}
              placeholder="Mobile Number"
              className="contact-input"
            />
          </div>
          <div>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onContactChange}
              placeholder="Email Address"
              className="contact-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
