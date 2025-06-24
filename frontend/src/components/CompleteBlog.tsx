import React from "react";
import Avatar from "./Avatar";

function CompleteBlog({
  title,
  date,
  name,
  content,
}: {
  title: string;
  date: string;
  name: string;
  content: string;
}) {
  return (
    <div className="grid grid-cols-15 m-20 gap-10">
      <div className="col-span-12">
        <p className="text-4xl font-extrabold mb-4">{title}</p>
        <p className="text-gray-600 mb-5">Posted on {date}</p>
        <p className="text-xl leading-9">{content}</p>
      </div>
      <div className="col-span-3">
        <p>Author</p>
        <div className="flex items-center gap-2">
          <Avatar name={name} size="S" />
          <p className="text-xl font-bold">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default CompleteBlog;
