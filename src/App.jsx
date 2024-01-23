
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import Dashboard from "./pages/Admin/";
import Addbooks from "./pages/Addbooks"
import Addauthors from "./pages/Addauthors"
import Login from "./pages/Login";
import ContextWrapper, { GlobalContext } from "./config/Context";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";


const App = () => {
  const { isAuthenticated } = GlobalContext;
  return (
    <ContextWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={isAuthenticated ? <Dashboard /> : <Login />} />
        <Route path="/admin/addbooks" element={isAuthenticated ? <Login /> : <Addbooks />} />
        <Route path="/admin/addauthors" element={isAuthenticated ? <Addauthors /> : <Login />} />
      </Routes>
      <Footer />
    </ContextWrapper>
  )
}
export default App
