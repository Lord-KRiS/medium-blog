import { useParams } from "react-router-dom";
import Appbar from "../components/Appbar";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { useBlogsByTag } from "../hooks";
import BlogCard from "../components/BlogCard";

function BlogsbyTag() {
  const { tag } = useParams();
  const { loading, blogs } = useBlogsByTag({ tag: tag || "" });

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex flex-col items-center">
          <LoadingSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex flex-col items-center">
        {blogs.map((blog) => (
          <BlogCard
            id={blog.id}
            name={blog.author.name}
            date="24th June, 2025"
            title={blog.title}
            content={blog.content}
            tag={blog.tag}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogsbyTag;
