import About from "./About.tsx";
import "./App.css";
import Navbar from "./components/(navigation)/Navbar.tsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import Contact from "./Contact.tsx";

function App() {
  return (
    <>
      <div className=" w-full">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
