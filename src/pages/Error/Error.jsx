import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/images/404.png";

const Error = () => {
  return (
    <div class="grid h-screen place-content-center ">
      <img src={error} alt="" className="w-2/3" />
      <p class="uppercase tracking-widest text-red-600-500">404 | Not Found</p>
      <div>
        <Link
          to={`/`}
          className="mt-6 inline-block gap-1 text-md font-medium hover:text-violet-900 border-2 px-3 py-1 rounded border-violet-900 bg-violet-900 hover:bg-gray-50 text-white transition "
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
