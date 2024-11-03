import React, { useContext } from "react";
import Layout from "../../Layout/Layout";
import { FaDownload, FaSearch } from "react-icons/fa";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { RxPlus } from "react-icons/rx";
import IconCard from "../../../ui/IconCard";
import { CgCheckR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import OrderList from "./OrderList";
import { LuShoppingBag } from "react-icons/lu";
import { AdminContext } from "../../../context/AdminStatsContext";

export default function Orders() {
  const { stats } = useContext(AdminContext);

  const statsData = [
    {
      value: stats?.totalOrders,
      text: "Total Orders",
      icon: <LuShoppingBag />,
      link: "/administration/orders",
    },
    {
      value: stats?.paidCount,
      text: "Paid Orders",
      icon: <CgCheckR />,
      link: "/administration/orders",
    },
    {
      value: stats?.pendingCount,
      text: "Unpaid Orders",
      icon: <MdOutlineIndeterminateCheckBox />,
      link: "/administration/orders",
    },
  ];
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="wrap container mx-auto px-10 py-5">
        <div className="header flex justify-between items-center">
          <h1 className="text-3xl font-bold">Orders</h1>
          <div className="wrap flex gap-2">
            <button className="flex items-center gap-3 p-3 bg-gray-300 text-sm rounded-lg">
              <FaDownload />
              Export CSV
            </button>
            <button
              className="flex items-center gap-3 p-3 bg-primary text-sm rounded-lg text-white"
              onClick={() => navigate("add")}
            >
              <RxPlus />
              Add New Order
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {statsData.map((i, index) => (
            <IconCard value={i.value} text={i.text} icon={i.icon} key={index} />
          ))}
        </div>

        <div className="wrap mt-10">
          <OrderList />
        </div>
      </div>
    </Layout>
  );
}
