import Avatar from "./Avatar";
import { Link, useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  return (
    <div className="flex justify-between px-6 py-4 border-b border-gray-300 relative">
      <Link to="/blogs">
        <p className="text-2xl font-bold">Medium</p>
      </Link>
      <div className="flex gap-8">
        <Link
          to="/publish"
          className="bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full"
        >
          New
        </Link>
        <div className="group relative cursor-pointer hover flex flex-col gap-1">
          <Avatar name="Krrish" size="L" />
          <button
            onClick={handleClick}
            className="absolute cursor-pointer right-1 top-10 bg-gray-100 p-2 py-1 border border-gray-400 rounded hidden group-hover:block"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
