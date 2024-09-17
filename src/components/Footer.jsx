import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Footer.css"
import { AppContext } from "./AppContext";

function Footer() {
    const { isUserLogged } = useContext(AppContext);
    const user = JSON.parse(localStorage.getItem("user"));

    let navbarItems;
  if (isUserLogged) {
    if (user.type === 'admin') {
      navbarItems = (
        <>
          <li>
            <NavLink to="/admin/dashboard">Admin Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/admin/users">Manage Users</NavLink>
          </li>
          <li>
            <NavLink to="/admin/products">Manage Products</NavLink>
          </li>
         
        </>
      );
    } else {
      navbarItems = (
        <>
          <li>
            <NavLink className="page" to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink className="page" to="/clothes">Clothes</NavLink>
          </li>
          <li>
            <NavLink className="page" to="/accessories">Accessories</NavLink>
          </li>
          <li>
            <NavLink className="page" to="/contactUs">Contact Us</NavLink>
          </li>
         
        </>
      );
    }
  } else {
    navbarItems = (
      <>
        <li>
          <NavLink className="page" to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink className="page" to="/clothes">Clothes</NavLink>
        </li>
        <li>
          <NavLink className="page" to="/accessories">Accessories</NavLink>
        </li>
        <li>
          <NavLink className="page" to="/contactUs">Contact Us</NavLink>
        </li>
        <li>
          <NavLink className="page" to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink className="page" to="/signup">Sign Up</NavLink>
        </li>
      </>
    );
  }   
    return (
      <footer className="footer-section full-block">
        <div className="container">
          <div className="footer-section-left-side">
            <ul>
              <li><NavLink to="#"><i className="fa-brands fa-facebook"></i></NavLink></li>
              <li><NavLink to="#"><i className="fa-brands fa-instagram"></i></NavLink></li>
            </ul>
            <p>calvinmangi627@gmail.com</p>
            <p>0114026601</p>
          </div>
          <div className="footer-section-center">
            <ul>                  
            {navbarItems}
            </ul>
          </div>
          <div className="footer-section-right-side">
            <li><NavLink to="/"><img src="./../src/assets/logo-white.svg" width="200px" alt="" /></NavLink></li>
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
  }
  
  export default Footer;