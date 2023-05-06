

import React from "react";
import './body.css';

function SecondBodyComponent () {
  return (
    <div className="zoox-container">
      <div className="zoox-left">
        <h2>Zec - Supplies</h2>
        <div></div>
        <p>
        Our company is dedicated to providing our customers with the most reliable and efficient drilling solutions that meet their specific needs. With a wide range of products and services, we offer everything from drilling rigs and bits to drilling fluids and accessories.        </p>
      </div>
      <div className="zoox-right">
        <div className="zoox-box">
          <h3><li className="listforwhyVoltaEnergy">Customer satisfaction</li></h3>
          <p> At ZEC-Supplies, we pride ourselves on our commitment to customer satisfaction, and we strive to deliver unparalleled value to our clients through our excellent products, competitive pricing, and exceptional customer service.</p>
        </div>
        <div className="zoox-box">
          <h3><li className="listforwhyVoltaEnergy">Why Zec-Supplies</li></h3>
          <p>Choose ZEC-Supplies for all your drilling needs and experience the difference that our expertise and experience can make.</p>
        </div>
      </div>
    </div>
  );
};

export default SecondBodyComponent;
