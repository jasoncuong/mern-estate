import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="mx-auto flex w-full items-center justify-between p-3">
        {/* left */}

        <div className="flex font-semibold">
          <Link to="/">
            <h1 className="text-sm sm:text-xl">
              <span>ReactJS App</span>
              <span>Estate</span>
            </h1>
          </Link>
        </div>
        {/* center  */}
        <div>
          <form className="relative flex items-center rounded-full bg-slate-100">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-full bg-transparent p-3 focus:outline-none"
            />
            <FaSearch className="absolute right-4 text-stone-600" />
          </form>
        </div>
        {/* right */}
        <div>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="hidden cursor-pointer text-slate-600 underline-offset-4 hover:underline sm:inline">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden cursor-pointer text-slate-600 underline-offset-4 hover:underline sm:inline">
                About
              </li>
            </Link>
            <Link to="/sign-in">
              <li className="cursor-pointer text-slate-600 underline-offset-4 hover:underline sm:inline">
                Sign In
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
