import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js"


/*
Header
 - Logo
 - Nav Items

Body
 - Search
 - RestaurantContainer
   - ResaurantCard - Img, name , star rating, cuisines

Footer
  - COpyright
  - Links
  - Address
  - Contact
*/






const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
