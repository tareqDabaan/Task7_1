import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import MyNav from "./components/MyNav/MyNav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
