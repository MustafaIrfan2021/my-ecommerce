import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
  className={({ isActive }) =>
    `flex items-center gap-3 py-2 px-3 md:px-9 border border-gray-300 border-r-0 rounded-l-md ${
      isActive ? "bg-[#ffebf5] border-[#ffebf5]" : "bg-white"
    }`
  }
  to={"/add"}
>
  <img className="w-5 h-5" src={assets.add_icon} alt="Add Items" />
  <p className="hidden md:block font-medium text-gray-700">Add Items</p>
</NavLink>
        <NavLink
  className={({ isActive }) =>
    `flex items-center gap-3 py-2 px-3 md:px-9 border border-gray-300 border-r-0 rounded-l-md ${
      isActive ? "bg-[#FFF1F6] border-[#FF4667]" : "bg-white border-gray-300"
    }`
  }
  to={"/list"}
>
  <img className="w-5 h-5" src={assets.order_icon} alt="List Items" />
  <p className="hidden md:block font-medium text-gray-700">List Items</p>
</NavLink>
        <NavLink
  className={({ isActive }) =>
    `flex items-center gap-3 py-2 px-3 md:px-9 border border-gray-300 border-r-0 rounded-l-md ${
      isActive ? "bg-[#FFF1F6] border-[#FF4667]" : "bg-white border-gray-300"
    }`
  }
  to={"/orders"}
>
  <img className="w-5 h-5" src={assets.order_icon} alt="Orders" />
  <p className="hidden md:block font-medium text-gray-700">Orders</p>
</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
