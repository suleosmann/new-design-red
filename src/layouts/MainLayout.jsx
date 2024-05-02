import React from "react";
import { Outlet } from "react-router-dom";
import donate from "../assets/donate.jpg";
import Footer from "../components/Footer/Footer";
import TopBar from "../components/Navbar/TopBar";
import NavBar from "../components/Navbar/NavBar";
import MainContentSwitcher from '../Routes/MainContentSwitcher';

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <div className="flex flex-col md:flex-row h-auto md:h-[80vh]">
        <div
          className="md:w-1/2 w-full h-64 md:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${donate})` }}
        >
          {/* Background image section adjusts its size on smaller screens */}
        </div>
        <div className="flex-1 p-4 md:p-8">
          <MainContentSwitcher />  {/* Placeholder for nested routes */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
