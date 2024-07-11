import React from "react";
import logo from "../assets/kevinRushLogo.png";
// import logo from "../assets/sj.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="mb-5 flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>

        <div>
          <ul className="flex">
            <li className="p-3 hover:cursor-pointer hover:border-b hover:bg-neutral-700 rounded">
              About Me
            </li>
            <li className="p-3 hover:cursor-pointer hover:border-b hover:bg-neutral-700 rounded">
              Experience
            </li>
            <li className="p-3 hover:cursor-pointer hover:border-b hover:bg-neutral-700 rounded">
              Projects
            </li>
            <li className="p-3 hover:cursor-pointer hover:border-b hover:bg-neutral-500 rounded">
              Technologies
            </li>
          </ul>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            className="hover:scale-125 duration-200"
            href="https://www.linkedin.com/in/sardarsj/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:scale-125 duration-200"
            href="https://github.com/sardarsj"
            target="_blank"
          >
            <FaGithub />
          </a>
          {/* <FaSquareXTwitter /> */}
          {/* <FaInstagram /> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
