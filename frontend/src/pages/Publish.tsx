import { useState } from "react";
import BackComponent from "../components/BackComponent";
import type { CreateBlogInput } from "@lordkris/medium-common";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

function Publish() {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState<CreateBlogInput>({
    title: "",
    content: "",
    tag: "",
  });

  const onClickHandler = async () => {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, blogData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate(`/blog/${res.data.id}`);
    } catch (error) {
      alert("Error occurred in publishing " + error);
    }
  };

  return (
    <div>
      <BackComponent />
      <div className="mt-15 flex justify-center">
        <div className="w-200">
          <div className="flex">
            <input
              className="w-[80%] text-slate-700 text-xl border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
              placeholder="Write your title here..."
              onChange={(e) =>
                setBlogData((c) => ({ ...c, title: e.target.value }))
              }
            />
            <input
              className="w-[20%] text-slate-700 text-xl border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
              placeholder="Write tag here"
              onChange={(e) =>
                setBlogData((c) => ({
                  ...c,
                  tag: e.target.value.split(" ")[0],
                }))
              }
            />
          </div>
          <textarea
            className="w-full h-100 text-slate-700 text-lg border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
            placeholder="Write the main post"
            onChange={(e) =>
              setBlogData((c) => ({ ...c, content: e.target.value }))
            }
          />
        </div>
      </div>

      <Link to="/blogs">
        <div className="flex justify-center">
          <button
            onClick={onClickHandler}
            className="bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full"
          >
            Publish
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Publish;
