import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex flex-col items-center z-50 fixed w-full">
        <h1 className="text-[#FF6F61] m-4 text-4xl md:text-8xl">Havets Skatter</h1>
        <div className="bg-gradient-to-r from-transparent via-coralRed to-transparent  flex items-center justify-center  w-full md:w-[70%]">
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
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
