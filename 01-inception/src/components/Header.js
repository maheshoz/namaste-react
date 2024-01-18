import {LOGO_URL} from "../utils/constants"
import { useState } from "react";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  // console.log("rendered Header Component on Btn click");
  // console.log("but compares the virtual dom previous state and updates only btn");

  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src={LOGO_URL}
          alt='logo image'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button 
            className="login"
            onClick={() => {
              btnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login");
            }}
            >
              {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;