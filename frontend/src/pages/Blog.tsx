import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import CompleteBlog from "../components/CompleteBlog";
import { useBlog } from "../hooks";
import BackComponent from "../components/BackComponent";
import Spinner from "../components/Spinner";

function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div>
        <BackComponent />
        <div className="flex justify-center h-screen items-center">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div>
      <BackComponent />
      <CompleteBlog blog={blog} />
    </div>
  );
}

export default Blog;
