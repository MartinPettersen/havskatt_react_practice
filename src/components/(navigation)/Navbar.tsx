import { useState } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="flex flex-col items-center z-50 fixed w-full">
        <div className="branding">
          <h1 className="text-[#FF6F61] m-4 text-4xl md:text-8xl">
            Havets Skatter
          </h1>
        </div>
        <div
          className={`bg-gradient-to-r from-transparent via-coralRed to-transparent  flex items-center justify-center  w-full md:w-[70%] ${showMenu ? "" : "hidden"} md:flex`}
        >
          <nav className="flex flex-col md:flex-row p-4 justify-center items-center md:justify-evenly md:w-[76%]">
            <Link to="/" className="text-[#1c1c1c]">
              Hjem
            </Link>
            <Link to="/menu" className="text-[#1c1c1c]">
              Meny
            </Link>
            <Link to="/ordertable" className="text-[#1c1c1c]">
              Bestill
            </Link>
            <Link to="/about" className="text-[#1c1c1c]">
              Om Oss
            </Link>
            <Link to="/contact" className="text-[#1c1c1c]">
              Kontakt Oss
            </Link>
            <button
              className="md:hidden text-[#1c1c1c]"
              onClick={() => setShowMenu(!showMenu)}
            >
              <XMarkIcon className="size-4 text-[#1c1c1c]" />
            </button>
          </nav>
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className={`bg-gradient-to-r from-transparent via-coralRed to-transparent p-2 w-full flex items-center justify-center md:hidden ${showMenu ? "hidden" : ""}`}
        >
          <Bars3Icon className="size-6  text-[#1c1c1c]" />
        </button>
      </header>
    </>
  );
}

export default Navbar;
