import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-xl font-bold text-white">
      <div className="space-y-5">
        <p>Page Not Found</p>
        <Link
          to={"/"}
          className="flex cursor-pointer items-center justify-center space-x-5 text-sm text-violet-400 hover:text-white"
        >
          <p>Back to Home</p>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
