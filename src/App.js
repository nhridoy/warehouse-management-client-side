import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddNew from "./pages/AddNew/AddNew";
import AllProduct from "./pages/AllProduct/AllProduct";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Home from "./pages/Home/Home";
import Inventory from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Registration from "./pages/Registration/Registration";
import "react-toastify/dist/ReactToastify.min.css";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
