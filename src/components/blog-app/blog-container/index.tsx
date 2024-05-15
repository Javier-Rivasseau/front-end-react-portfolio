import React, { ReactNode } from "react";
import BlogNavbar from "../blog-navbar";

interface BlogContainerProps {
    children: ReactNode
}

const BlogContainer : React.FC <BlogContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <BlogNavbar/>
      {children}
    </div>
  );
};

export default BlogContainer;
