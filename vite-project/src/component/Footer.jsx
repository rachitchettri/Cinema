import React from "react";
import "./Footer.css";
const Footer = ({ totalCost }) => {
  return (
    <footer>
      <div className="foo">
      <p>Total Cost: ₹{totalCost}</p>
        <button>Buy Now</button>
      </div> 
     
      
    </footer>
  );
};

export default Footer;
