import { Link } from "react-router-dom";

function BackComponent() {
  return (
    <Link to="/blogs">
      <div className="flex gap-2 items-center pt-5 px-10  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
        <p className="underline text-3xl">Back</p>
      </div>
    </Link>
  );
}

export default BackComponent;
