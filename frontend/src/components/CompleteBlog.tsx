import React from "react";
import Avatar from "./Avatar";
import type { Blog } from "../hooks";

function CompleteBlog({ blog }: { blog: Blog }) {
  return (
    <div className="grid grid-cols-15 m-10 md:m-20 gap-10">
      <div className="col-span-9 row-start-2 md:col-span-12 md:row-start-1">
        <p className="text-2xl md:text-4xl font-extrabold md:font-extrabold mb-4">
          {blog.title}
        </p>
        <p className="text-gray-600 mb-5">Posted on 25th June 2025</p>
        <p className="text-xl md:leading-9">{blog.content}</p>
      </div>
      <div className="col-span-9 md:col-span-3">
        <p>Author</p>
        <div className="flex items-center gap-2">
          <Avatar name={blog.author.name} size="S" />
          <p className="text-xl font-bold">{blog.author.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CompleteBlog;
