import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./Images/food-app-logo.png";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - restaurant container
 *   - restaurant cards
 * Footer
 * - copyright
 * - links
 * - address
 * - contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
