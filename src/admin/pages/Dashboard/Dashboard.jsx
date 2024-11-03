import React, { useContext } from "react";
import Layout from "../../Layout/Layout";
import IconCard from "../../../ui/IconCard";
import { CiShoppingTag } from "react-icons/ci";
import { LuGlobe2, LuShoppingBag, LuUsers2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { getOrders, getStats } from "../../../service/admin-api-service";
import { useQuery } from "@tanstack/react-query";
import statusText from "../../../utils/status-text";
import { AdminContext } from "../../../context/AdminStatsContext";

export default function Dashboard() {
  const { stats } = useContext(AdminContext);

  const { data: orders = {} } = useQuery({
    queryFn: () => getOrders(), // Corrected to pass the function reference
    queryKey: ["orders"],
  });

  console.log(orders);

  const statsData = [
    {
      value: stats?.totalOrders,
      text: "Orders",
      icon: <LuShoppingBag />,
      link: "/administration/orders",
    },
    {
      value: stats?.totalProductsSold,
      text: "Product sold",
      icon: <CiShoppingTag />,
      link: "/administration/orders",
    },
    {
      value: stats?.newCustomers,
      text: "New Customer",
      icon: <LuUsers2 />,
      link: "/administration/orders",
    },
    {
      value: 34,
      text: "Website Visit",
      icon: <LuGlobe2 />,
      link: "/administration/orders",
    },
  ];
  return (
    <Layout>
      <div className="wrap container px-10 py-5 mx-auto">
        <div className="welcome-text text-4xl text-black font-extrabold">
          <h1>Hello Admin</h1>
        </div>

        <div className="wrap mt-5 rounded-lg shadow-md w-full p-3 border-t border-gray-500">
          <div className="header text-gray-600">
            <h1 className="font-bold text-2xl">Business Overview</h1>
            <span>Here is how your business is doing today</span>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {statsData.map((i, index) => (
              <IconCard
                value={i.value}
                text={i.text}
                icon={i.icon}
                key={index}
              />
            ))}
          </div>
        </div>
        {/* Quick Action */}
        <div className="wrap mt-16 rounded-lg shadow-lg w-full p-3 border-t border-gray-500 py-5">
          <div className="header mb-3 font-bold">
            <h3>Quick Action</h3>
          </div>
          <Link className="flex items-center gap-2 bg-gray-100 p-2 mb-2 rounded-lg text-primary">
            <LuShoppingBag />
            <span>Create New Order </span>
          </Link>
          <Link className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg text-primary">
            <LuShoppingBag />
            <span>Add a New Product </span>
          </Link>
        </div>

        {/* Recent Orders */}
        <div className="wrap mt-16 rounded-lg shadow-lg w-full p-3 border-t border-gray-500 py-5">
          <div className="overflow-x-scroll">
            <table className="w-full">
              <thead className="bg-gray-200 rounded-lg">
                <tr>
                  <td>Order number & Name</td>
                  <td>Total</td>
                  <td>Status</td>
                  <td>Payment</td>
                  <td>Shipping</td>
                  <td>Date</td>
                </tr>
              </thead>
              <tbody>
                {orders?.info?.orders.map((i, index) => (
                  <tr key={index}>
                    <td>
                      <div>
                        <h1 className="capitalize">
                          #000{index + 1} . {i.user?.firstname}{" "}
                          {i.user?.lastname}
                        </h1>
                        <span className="wrap text-xs">
                          qty . +{i.products?.length} items
                        </span>
                      </div>
                    </td>
                    <td>
                      <span>${i.totalAmount}</span>
                    </td>
                    <td>{statusText("status", i.status)}</td>
                    <td>{statusText("payment", i.payment)}</td>
                    <td>{statusText("shipping", i.shipping)}</td>
                    <td>
                      <span className="text-xs p-2">07/08/2023</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
