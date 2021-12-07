import React from "react";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from 'react-router-dom'; 


const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/*Logo Section*/}

        <div className="logo">
          <h2><NavLink to="/">HealthPlus</NavLink></h2>
        </div>

        {/*Menu Section*/}

        <div className="menu-link">
          <ul>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/showreel">Showreel</NavLink>
            </li>
            <li>
              <NavLink to="/benefits">Benefits</NavLink>
            </li>
            <li>
              <NavLink to="/advantages">Advantages</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/*Social Media Section*/}

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="youtube"
              >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="facebook"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                className="twitter"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      
      
    </>
  );
};

export default Navbar;
