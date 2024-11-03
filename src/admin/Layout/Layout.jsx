import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { LuShoppingBag, LuUsers2 } from "react-icons/lu";
import { CiShoppingTag } from "react-icons/ci";

export default function Layout({ children }) {
  const link = [
    {
      name: "Dashboard",
      link: "/administration/dashboard/",
      icon: <RxDashboard />,
    },
    {
      name: "Customers",
      link: "/administration/customer",
      icon: <LuUsers2 />,
    },
    {
      name: "Products",
      link: "/administration/product",
      icon: <CiShoppingTag />,
    },
    {
      name: "Orders",
      link: "/administration/orders",
      icon: <LuShoppingBag />,
    },
  ];
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0">
      {/* Top Menu */}
      <div className="wrap"></div>

      {/* Side Menu and content */}
      <div className="wrap flex">
        <div className="side-menu w-[70px] flex flex-col items-center justify-center gap-5 border-r border-slate-700 h-[100vh] px-2">
          {link.map((i, index) => (
            <NavLink
              to={i.link}
              key={index}
              className="bg-gray-200 rounded-lg p-2 flex justify-center items-center text-2xl text-gray-700 hover:scale-[1.1] transition-all"
            >
              {i.icon}
            </NavLink>
          ))}
        </div>
        <div className="content w-full h-[100vh] overflow-scroll relative">
          {children}
        </div>
      </div>
    </div>
  );
}
