import About from "./About.tsx";
import "./App.css";
import Navbar from "./components/(navigation)/Navbar.tsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import Contact from "./Contact.tsx";
import Menu from "./Views/Menu.tsx";
import OrderTable from "./Views/OrderTable.tsx";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <html lang="nb" />
        <title>Hav Skatt</title>
        <meta
          name="description"
          content="En sjømat restauraunt portfolio project"
        />
      </Helmet>
      <div className=" w-full">
        <Navbar />
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ordertable" element={<OrderTable />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
