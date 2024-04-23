import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
