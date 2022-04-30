import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AllProduct from "./pages/AllProduct/AllProduct";
import Home from "./pages/Home/Home";
import Inventory from "./pages/Inventory/Inventory";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory/:id" element={<Inventory />} />
        <Route path="/all" element={<AllProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
