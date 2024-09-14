import React, { useEffect, useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import "../styles/base.css"
import "../styles/Navbar.css";
import { AppContext } from "./AppContext";

function Navbar() {
  const { isUserLogged, handleLogout } = useContext(AppContext);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    console.log("isUserLogged has changed:", isUserLogged); // To see if this updates
  }, [isUserLogged]);
  const navigate = useNavigate();

  function logOut() {
    handleLogout();
    navigate("/login")
  }

  return (
    <header className="full-block">
      <div className="header-navigation-container" id="scroll-container">
        <div className="container">
          <div className="navigation">
            <div className="navigation-left-side">
              <NavLink to="/"><img src="./../src/assets/logo.svg" width="200px" alt="" /></NavLink>
            </div>
            <div className="navigation-right-side">
              <nav>
                <ul>
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
                  {!isUserLogged && (
                    <>
                      <li>
                        <NavLink className="page" to="/login">Log In</NavLink>
                      </li>
                      <li>
                        <NavLink className="page" to="/signup">Sign Up</NavLink>
                      </li>
                    </>
                  )}
                  {isUserLogged && (
                    <>
                      <li>
                        <NavLink to="/" onClick={logOut} className="custom-active-class">Log Out</NavLink>
                      </li>
                      <li>
                        <span className="navlinkName">Hello {user?.username || "Guest"}</span>
                      </li>

                      <li>
                        <NavLink to="/cart">
                          <img src="./../src/assets/shopping-cart.svg" width="30px" alt="" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/checkout">Checkout</NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;