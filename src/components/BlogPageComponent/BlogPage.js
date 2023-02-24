import React, { useState } from "react";
import "./BlogPage.css";

function BlogPageComponent() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const blogs = [
    {
      id: 1,
      title: "My First Blog Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "This is a plog post for Volta",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "I love working at Volta",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const handleBlogSelect = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <>
      <div className="blogpagecomponent">
        <div className="scrollablefeed">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`blog ${selectedBlog && selectedBlog.id === blog.id ? "selected" : ""}`}
              onClick={() => handleBlogSelect(blog)}
            >
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
        <div className="verticalLine"></div>
        <div className="currentblog">
          {selectedBlog ? (
            <>
              <h2>{selectedBlog.title}</h2>
              <p>{selectedBlog.content}</p>
            </>
          ) : (
            <p>Please select a blog from the list on the left.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default BlogPageComponent;
