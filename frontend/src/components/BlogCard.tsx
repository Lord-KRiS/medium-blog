import React from "react";
import Avatar from "./Avatar";

interface blogType {
  name: string;
  date: string;
  title: string;
  content: string;
  tag: string;
}

function BlogCard({ name, date, title, content, tag }: blogType) {
  return (
    <div className="w-150 border-b border-gray-300 pb-12 mt-6">
      <div className="flex gap-3 items-center mb-3">
        <Avatar name={name} size="S" />
        <p>{name}</p>
        &middot;
        <p className="text-gray-500">{date}</p>
      </div>
      <p className="text-2xl font-bold mb-1 leading-7">{title}</p>
      <p className="text-lg mb-10">{`${content.slice(0, 140)} ${
        content.length > 100 ? "..." : ""
      }`}</p>
      <div className="flex gap-3 items-center">
        <Tag tag={tag} />
        <p>{`${Math.ceil(content.length / 100)} min read`}</p>
      </div>
    </div>
  );
}

function Tag({ tag }: { tag: string }) {
  return <div className="bg-gray-100 rounded-full px-2 py-1">{tag}</div>;
}

export default BlogCard;
