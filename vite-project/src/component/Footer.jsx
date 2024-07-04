import React from "react";
import "./Footer.css";
const Footer = ({ totalCost , onBuyNow }) => {
  return (
    <footer>
      <div className="foo">
      <p>Total Cost: ₹{totalCost}</p>
        <button onClick={onBuyNow}>Buy Now</button>
      </div> 
     
      
    </footer>
  );
};

export default Footer;
