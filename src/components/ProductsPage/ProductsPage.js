
import React from 'react';
import drill from "./drill.jpg";
import blasthole from "./blasthole.jpg";
import gas from "./gas.jpg";
import oil from "./oil.jpg";
import rods from "./rods.jpg";
import wirelinecore from "./wirelinecore.png"
import refinery from "./refinery.jpg";
import lubricants from "./lubricants.jpg";
import "./BlogPage.css";

// Define an array of product objects
const products = [
  {
    name: 'Diamond Drilling Products',
    image: drill,
    description: 'Diamond Tools'
  },
  {
    name: 'Blast Hole Drilling Products',
    image: rods,
    description: 'Rods'
  },
  {
    name: 'Rockdrill Parts',
    image: wirelinecore,
    description: 'wireline Core Barrels'
  },
];

const BlogPageComponent = () => {
  return (
    <div className='productPageContainer'>
      <div>
        <h1 className="products-title">Products</h1>
      </div>
        <br></br>
        <div className="products-container">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-description">{product.description}</div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default BlogPageComponent;
