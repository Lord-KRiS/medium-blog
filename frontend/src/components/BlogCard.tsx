import Avatar from "./Avatar";
import { Link } from "react-router-dom";

interface blogType {
  id: string;
  name: string;
  date: string;
  title: string;
  content: string;
  tag: string;
}

function BlogCard({ id, name, date, title, content, tag }: blogType) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="w-90 md:w-150 lg:w-200 border-b border-gray-300 pb-12 mt-6 cursor-pointer">
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
        <Link to={`/blog/tag/${tag}`} className="flex gap-3 items-center">
          <Tag tag={tag} />
          <p>{`${Math.ceil(content.length / 100)} min read`}</p>
        </Link>
      </div>
    </Link>
  );
}

export function Tag({ tag }: { tag: string }) {
  return <div className="bg-gray-100 rounded-full px-2 py-1">{tag}</div>;
}

export default BlogCard;
