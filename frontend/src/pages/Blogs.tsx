import React from "react";
import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";

function Blogs() {
  return (
    <div>
      <Appbar />
      <div className="flex flex-col items-center">
        <BlogCard
          name="Krrish Ag"
          date="24th June, 2025"
          title="The one thing that you have been missing which will in your life which will give it a purpose"
          content="The one thing that you have been missing which will in your life which will give it a purposeThe one thing that you have been missing which will in your life which will give it a purposeThe one thing that you have been missing which will in your life which will give it a purpose"
          tag="Visionary"
        />
        <BlogCard
          name="Krrish Ag"
          date="24th June, 2025"
          title="The one thing that you have been missing which will in your life which will give it a purpose"
          content="The one thing that you have been missing which will in your life which will give it a purposeThe one thing that you have been missing which will in your life which will give it a purposeThe one thing that you have been missing which will in your life which will give it a purpose"
          tag="Visionary"
        />
        <BlogCard
          name="Krrish Ag"
          date="24th June, 2025"
          title="The one thing that you have been missing which will in your life which will give it a purpose"
          content="The one thing that you have been missing which will in your life which will give it a purposeThe one thing that you have been missing which will in your life which will give it a purposeThe one thing that you have been missing which will in your life which will give it a purpose"
          tag="Visionary"
        />
      </div>
    </div>
  );
}

export default Blogs;
