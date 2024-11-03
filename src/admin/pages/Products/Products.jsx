import React, { useContext } from "react";
import Layout from "../../Layout/Layout";
import { FaDownload, FaSearch } from "react-icons/fa";
import { CiBoxes, CiShoppingTag } from "react-icons/ci";
import { RxPlus } from "react-icons/rx";
import { IoIosRefresh } from "react-icons/io";
import IconCard from "../../../ui/IconCard";
import { FaNairaSign } from "react-icons/fa6";
import ProductList from "./ProductList";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../../context/AdminStatsContext";

export default function Products() {
  const { stats } = useContext(AdminContext);

  const statsData = [
    {
      value: `$${parseInt(stats?.totalPriceOfStock)}`,
      text: "Total Inventory",
      icon: <FaNairaSign />,
      link: "/administration/orders",
    },
    {
      value: stats?.totalProductsSold,
      text: "Total Product Sold",
      icon: <CiShoppingTag />,
      link: "/administration/orders",
    },
    {
      value: stats?.outOfStockProducts,
      text: "Out of stock",
      icon: <CiBoxes />,
      link: "/administration/orders",
    },
  ];
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="wrap container mx-auto px-10 py-5">
        <div className="header flex justify-between items-center">
          <h1 className="text-3xl font-bold">Products</h1>
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
              Add New Product
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {statsData.map((i, index) => (
            <IconCard value={i.value} text={i.text} icon={i.icon} key={index} />
          ))}
        </div>

        <div className="wrap mt-10">
          <ProductList />
        </div>
      </div>
    </Layout>
  );
}
