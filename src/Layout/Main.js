import React, { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import { AccountsContext } from "../App";

const Main = () => {
  const { pathname } = useLocation();
  const { isSidebarOpen } = useContext(AccountsContext); // Optional, for potential future use

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex h-screen overflow-hidden bg-[#FAF9F6]">
      <Header />
      <div className="flex-1 overflow-y-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;