import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddNew from "./pages/AddNew/AddNew";
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
        <Route path="/addnew" element={<AddNew />} />
        <Route path="/myitems" element={<AllProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
