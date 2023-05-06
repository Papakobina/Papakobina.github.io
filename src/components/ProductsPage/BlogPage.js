// import React, { useState } from "react";
// import "./BlogPage.css";

// function BlogPageComponent() {
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const blogs = [
//     {
//       id: 1,
//       title: "My First Blog Post",
//       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       id: 2,
//       title: "This is a plog post for Volta",
//       content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//     {
//       id: 3,
//       title: "I love working at Volta",
//       content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     },
//   ];

//   const handleBlogSelect = (blog) => {
//     setSelectedBlog(blog);
//   };

//   return (
//     <>
//       <div className="blogpagecomponent">
//         <div className="scrollablefeed">
//           {blogs.map((blog) => (
//             <div
//               key={blog.id}
//               className={`blog ${selectedBlog && selectedBlog.id === blog.id ? "selected" : ""}`}
//               onClick={() => handleBlogSelect(blog)}
//             >
//               <h2>{blog.title}</h2>
//               <p>{blog.content}</p>
//             </div>
//           ))}
//         </div>
//         <div className="verticalLine"></div>
//         <div className="currentblog">
//           {selectedBlog ? (
//             <>
//               <h2>{selectedBlog.title}</h2>
//               <p>{selectedBlog.content}</p>
//             </>
//           ) : (
//             <p>Please select a blog from the list on the left.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default BlogPageComponent;

import React from 'react';
import "./BlogPage.css";

// Define an array of product objects
const products = [
  {
    name: 'Diamond Drilling Products',
    image: 'https://example.com/diamond-drilling.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Blast Hole Drilling Products',
    image: 'https://example.com/blast-hole-drilling.jpg',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Rockdrill Parts',
    image: 'https://example.com/rockdrill-parts.jpg',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Drill Rig Parts',
    image: 'https://example.com/drill-rig-parts.jpg',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    name: 'Geotechnical & Ground Engineering Products',
    image: 'https://example.com/geotechnical.jpg',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    name: 'Lubricants',
    image: 'https://example.com/lubricants.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
];

const BlogPageComponent = () => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.name} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-description">{product.description}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogPageComponent;
