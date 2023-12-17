import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="w-full h-[150px] flex justify-center items-center z-10 fixed bg-transparent">
      <div className="container flex justify-between items-center">
        <Link to={"/"}>
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <g id="Layer_1">
              <g>
                <circle cx="25" cy="27" r="7" />
                <path d="M25,21c3.308,0,6,2.692,6,6s-2.692,6-6,6s-6-2.692-6-6S21.692,21,25,21 M25,19c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S29.41,19,25,19L25,19z" />
              </g>
              <g>
                <path d="M9,42c-2.206,0-4-1.794-4-4V17c0-2.206,1.794-4,4-4h5.1c0.477,0,0.887-0.336,0.98-0.803l0.4-1.99C15.855,8.349,17.504,7,19.4,7H30.6c1.896,0,3.545,1.349,3.92,3.208l0.4,1.99C35.014,12.664,35.424,13,35.9,13H41c2.206,0,4,1.794,4,4v21c0,2.206-1.794,4-4,4H9z M25,16c-6.065,0-11,4.935-11,11s4.935,11,11,11s11-4.935,11-11S31.065,16,25,16z" />
                <path d="M30.6,8c1.422,0,2.658,1.012,2.939,2.404l0.4,1.99C34.127,13.328,34.947,14,35.9,14H41c1.654,0,3,1.346,3,3v21c0,1.654-1.346,3-3,3H9c-1.654,0-3-1.346-3-3V17c0-1.654,1.346-3,3-3h5.1c0.953,0,1.773-0.672,1.961-1.606l0.4-1.989C16.742,9.012,17.978,8,19.4,8H30.6 M25,39c6.617,0,12-5.383,12-12s-5.383-12-12-12s-12,5.383-12,12S18.383,39,25,39 M30.6,6H19.4c-2.38,0-4.43,1.68-4.9,4.01L14.1,12H9c-2.76,0-5,2.24-5,5v21c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V17c0-2.76-2.24-5-5-5h-5.1l-0.4-1.99C35.03,7.68,32.98,6,30.6,6L30.6,6z M25,37c-5.52,0-10-4.48-10-10s4.48-10,10-10s10,4.48,10,10S30.52,37,25,37L25,37z" />
              </g>
            </g>
            <g id="Layer_2"></g>
          </svg>
        </Link>
        <ul className="flex gap-5 text-white uppercase font-bold text-[12px]">
          <li className="px-5 py-2">
            <Link to={"/"}>Home</Link>
          </li>

          <li className="px-5 py-2">
            <Link to={"/about"}>About</Link>
          </li>

          <li className="px-5 py-2">
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>

          <li className="px-5 py-2">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <Socials />
      </div>
    </header>
  );
};

export default Header;