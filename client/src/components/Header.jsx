import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <Navbar className="border-b-2">
      {/* Left-aligned title */}
      <div className="flex items-center justify-start pl-4">
        <Link to="/" className="flex items-center text-sm sm:text-xl font-semibold dark:text-white">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white inline-block">
            Pasindu's
          </span>{" "}
          <span className="inline-block">Blog</span>
        </Link>
      </div>

      {/* Centered search bar */}
      <form className="flex items-center justify-center w-full">
        <div className="relative w-1/4 max-w-xs"> {/* Adjusted width */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <AiOutlineSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
        </div>
      </form>

      {/* Search icon button */}
      <button className="lg:hidden w-12 h-10 text-gray-500">
        <AiOutlineSearch />
      </button>
    </Navbar>
  );
}
