import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./../styles/Footer.css"
import { AppContext } from "./AppContext";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
    const { isUserLogged } = useContext(AppContext);
    const user = JSON.parse(localStorage.getItem("user"));
    const location = useLocation();

    let navbarItems;
    // ... (rest of the code remains the same)

    if (!location.pathname.startsWith('/admin')) {
      return (
        <footer className="footer-section full-block">
          <div className="container">
            <div className="footer-section-left-side">
              <ul>
                <li><NavLink to="#"><FaInstagram /></NavLink></li>
                <li><NavLink to="#"><FaXTwitter /></NavLink></li>
                <li><NavLink to="#"><FaWhatsapp /></NavLink></li>
              </ul>              
            </div>           
            <div className="footer-section-right-side">
              <li><NavLink to="/"><img src="./../src/assets/icon.png" width="200px" alt="" /></NavLink></li>
            </div>
            <div className="footer-section-copyright">
              <p>&copy; 2024 . All rights reserved.</p>
              <ul>
                <li>Terms and Conditions Apply</li>             
              </ul>
            </div>
          </div>
        </footer>
      );
    } else {
      return null; // don't render the footer for admin routes
    }
  }
  
  export default Footer;