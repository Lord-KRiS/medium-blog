import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import CompleteBlog from "../components/CompleteBlog";
import { useBlog } from "../hooks";
import BackComponent from "../components/BackComponent";

function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BackComponent />
      <CompleteBlog blog={blog} />
    </div>
  );
}

export default Blog;
