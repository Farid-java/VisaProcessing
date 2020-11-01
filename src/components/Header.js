import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <img
          className="header_img"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />

        <div className="header_display">
          <div className="header_option">
            <span className="header_name" id="ftm">
              FTM
            </span>
          </div>

          <Link to="/home">
            <div className="header_option">
              <span className="header_name">Home</span>
            </div>
          </Link>

          <div className="header_option">
            <span className="header_name">Modules</span>
          </div>

          <div className="header_option">
            <span className="header_name">Search</span>
          </div>

          <div className="header_option">
            <span className="header_name">Sign-In</span>
          </div>
        </div>
      </div>

      <div>
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=" "
          id="img2"
        />
      </div>
    </div>
  );
}

export default Header;
