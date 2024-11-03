import React, { useEffect, useState } from "react";
import statusText from "../../../utils/status-text";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../../service/admin-api-service";
import { IoIosRefresh } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

export default function OrderList() {
  const [shipped, setShipped] = useState(""); // or initial value as needed
  const [status, setStatus] = useState(""); // or initial value as needed
  const [payment, setPayment] = useState(""); // or initial value as needed
  const [limit, setLimit] = useState(10); // default limit
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const { data: orders = {}, refetch } = useQuery({
    queryFn: () => getOrders(shipped, status, payment, limit, offset), // Corrected to pass the function reference
    queryKey: ["orders"],
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [shipped, status, payment, limit, offset, refetch]);

  const handleRefresh = async () => {
    setLoading(true);
    await refetch();
    setLoading(false);
  };
  return (
    <>
      <div className="filters flex justify-between py-2">
        <div className="wrap flex gap-3">
          <button
            className="p-2 bg-gray-200 rounded-lg"
            onClick={handleRefresh}
          >
            {loading ? <ClipLoader size={20} /> : <IoIosRefresh />}
          </button>

          <select
            className="bg-gray-200 rounded-lg px-2 py-3 text-sm"
            onChange={(e) => setShipped(e.target.value)}
          >
            <option value="">Shipping</option>
            <option value={true}>Fufilled</option>
            <option value={false}>Unfulled</option>
          </select>

          <select
            className="bg-gray-200 rounded-lg px-2 py-3 text-sm"
            // onChange={}
          >
            <option value="#">Filter by Payment</option>
            <option value="#">Krindle collection</option>
            <option value="#">Pectorial collection</option>
          </select>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <FaSearch className="text-primary" />
          </div>
          <input
            type="text"
            id="phone-input"
            aria-describedby="helper-text-explanation"
            className="bg-gray-200 text-gray-800 text-sm rounded-lg block w-full pe-10 px-3 py-2 dark:bg-transparent border-primary placeholder-gray-400"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Search"
            required
          />
        </div>
      </div>
      <div className="wrap rounded-lg shadow-lg w-full p-3 border-t border-gray-500 py-5">
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
              {orders?.info?.orders?.map((i, index) => (
                <tr key={index}>
                  <td>
                    <div>
                      <h1 className="capitalize">
                        #000{index + 1} . {i.user?.firstname} {i.user?.lastname}
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
    </>
  );
}
