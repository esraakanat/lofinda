import React, { useContext, useState } from "react";
import Layout from "../../Layout/Layout";
import IconCard from "../../../ui/IconCard";
import {
  FaDownload,
  FaEdit,
  FaEnvelopeSquare,
  FaSearch,
  FaTrash,
} from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { IoPersonAdd } from "react-icons/io5";
import WaitlistUsers from "./WaitlistUsers";
import OrderUser from "./OrderUser";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../../context/AdminStatsContext";

export default function Customers() {
  const { stats } = useContext(AdminContext);

  const statsData = [
    {
      value: stats?.totalCustomers,
      text: "Total Customer",
      icon: <FaEnvelopeSquare />,
      link: "/administration/orders",
    },
    {
      value: stats?.activeUsers,
      text: "Active Customer",
      icon: <LuUsers2 />,
      link: "/administration/orders",
    },
  ];
  const dum = [1, 1, 1, 1];
  const [showCustomer, setShowCustomer] = useState(true);
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="wrap container mx-auto px-10 py-5">
        <div className="header flex justify-between items-center">
          <h1 className="text-3xl font-bold">Customers</h1>
          <div className="wrap flex gap-2">
            <button className="flex items-center gap-3 p-3 bg-gray-300 text-sm rounded-lg">
              <FaDownload />
              Customer CSV
            </button>
            <button className="flex items-center gap-3 p-3 bg-gray-300 text-sm rounded-lg">
              <FaDownload />
              Customer CSV
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {statsData.map((i, index) => (
            <IconCard value={i.value} text={i.text} icon={i.icon} key={index} />
          ))}
        </div>

        <div className="wrap flex justify-end  mt-16 mb-2">
          <button
            className="flex items-center gap-3 p-3 bg-primary text-white  text-sm rounded-lg"
            onClick={() => navigate("add")}
          >
            <IoPersonAdd />
            Create Customer
          </button>
        </div>
        <div className="wrap rounded-lg shadow-lg w-full p-3 border-t border-gray-500 py-5">
          <div className="table-header flex justify-between items-center">
            <div className="wrap">
              <button
                className={`px-3 py-2 ${
                  showCustomer ? "bg-primary text-white" : "bg-gray-300"
                } rounded-t-lg`}
                onClick={() => setShowCustomer(true)}
              >
                Customer
              </button>
              <button
                className={`px-3 py-2 ${
                  !showCustomer ? "bg-primary text-white" : "bg-gray-300"
                } rounded-t-lg ml-2`}
                onClick={() => setShowCustomer(false)}
              >
                Waitlist
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                <FaSearch className="text-primary" />
              </div>
              <input
                type="text"
                id="phone-input"
                aria-describedby="helper-text-explanation"
                className="bg-gray-100 text-gray-800 text-sm rounded-lg block w-full pe-10 px-3 py-2 dark:bg-transparent border-primary placeholder-gray-400"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="First Name"
                required
              />
            </div>
          </div>

          {showCustomer ? (
            <OrderUser data={dum} />
          ) : (
            <WaitlistUsers data={dum} />
          )}
        </div>
      </div>
    </Layout>
  );
}
