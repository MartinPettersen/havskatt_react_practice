import { useState } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="flex flex-col items-center z-50 fixed w-full" role="banner">
        <div className="branding">
          <h1 className="text-[#FF6F61] m-4 text-4xl md:text-8xl">
            Havets Skatter
          </h1>
        </div>
        <div
          className={`bg-gradient-to-r from-transparent via-coralRed to-transparent  flex items-center justify-center  w-full md:w-[70%] ${showMenu ? "" : "hidden"} md:flex`}
        >
          <nav aria-label="Hoved Navigation" className="flex items-center justify-center md:w-[76%]">
            <ul className="flex flex-col md:flex-row p-4 justify-center items-center  w-full md:justify-evenly">
            <li>

            <Link to="/" className="text-[#1c1c1c]">
              Hjem
            </Link>
            </li>
            <li>

            <Link to="/menu" className="text-[#1c1c1c]">
              Meny
            </Link>
            </li>
            <li>
              
            <Link to="/ordertable" className="text-[#1c1c1c]">
              Bestill
            </Link>
            </li>
            <li>

            <Link to="/about" className="text-[#1c1c1c]">
              Om Oss
            </Link>
            </li>
            <li>

            <Link to="/contact" className="text-[#1c1c1c]">
              Kontakt Oss
            </Link>
            </li>
            <li className="md:hidden">

            <button
              className="md:hidden text-[#1c1c1c]"
              onClick={() => setShowMenu(!showMenu)}
              aria-label={"Lukk Meny"}
              >
              <XMarkIcon className="size-4 text-[#1c1c1c]" />
            </button>
                </li>
              </ul>
          </nav>
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className={`bg-gradient-to-r from-transparent via-coralRed to-transparent p-2 w-full flex items-center justify-center md:hidden ${showMenu ? "hidden" : ""}`}
          aria-label="Åpne Meny"
        >
          <Bars3Icon className="size-6  text-[#1c1c1c]" />
        </button>
      </header>
    </>
  );
}

export default Navbar;
