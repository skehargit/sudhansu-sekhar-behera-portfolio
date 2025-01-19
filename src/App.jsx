import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GrainyBackground from "./components/GrainyBackground";

function App() {
  return (
    <div className="relative bg-[#0c0c0c]">
      <Navbar />
      <GrainyBackground />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
