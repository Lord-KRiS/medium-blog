import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks";
import LoadingSkeleton from "../components/LoadingSkeleton";

function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex flex-col items-center">
          <LoadingSkeleton />
          <LoadingSkeleton />
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
            date={blog.date}
            title={blog.title}
            content={blog.content}
            tag={blog.tag}
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
