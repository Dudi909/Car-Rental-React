import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import Sewa from "./pages/Sewa";
import Cari from "./pages/Cari";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cari" element={<Cari />} />
      </Routes>
    </>
  );
}

export default App;
