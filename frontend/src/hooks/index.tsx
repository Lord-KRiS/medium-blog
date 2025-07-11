import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blog {
  title: string;
  content: string;
  id: string;
  tag: string;
  date: string;
  author: {
    name: string;
  };
}

export function useBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setBlogs(res.data.blogs))
      .then(() => setLoading(false));
  }, []);

  return { loading, blogs };
}

export function useBlog({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setBlog(res.data.blog))
      .then(() => setLoading(false));
  }, [id]);

  return { loading, blog };
}

export function useBlogsByTag({ tag }: { tag: string }) {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/tag/${tag}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setBlogs(res.data.blogs))
      .then(() => setLoading(false));
  }, [tag]);

  return { loading, blogs };
}
