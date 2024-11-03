import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { getProducts } from "../../../service/admin-api-service";
import statusText from "../../../utils/status-text";
import { IoIosRefresh } from "react-icons/io";

export default function ProductList() {
  const [category, setCategory] = useState("");
  const [publish, setpublish] = useState(false);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const { data: products = {}, refetch } = useQuery({
    queryFn: () => getProducts(category, publish, limit, offset),
    queryKey: ["products"],
  });

  useEffect(() => {
    refetch();
  }, [category, publish, limit, offset, refetch]);

  return (
    <>
      <div className="filters flex justify-between py-2">
        <div className="wrap flex gap-3">
          <button className="p-2 bg-gray-200 rounded-lg">
            <IoIosRefresh />
          </button>

          <select
            className="bg-gray-200 rounded-lg px-2 py-3 text-sm"
            onChange={(e) => setpublish(e.target.value)}
          >
            <option value="">Status</option>
            <option value="false">Unpublished</option>
            <option value="true">Published</option>
          </select>

          <select
            className="bg-gray-200 rounded-lg px-2 py-3 text-sm"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="#">Filter by Category</option>
            <option value="Perfume">Perfume</option>
            <option value="Rollon">Rollon</option>
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
      <div className="overflow-x-scroll">
        <table className="w-full">
          <thead className="bg-gray-200 rounded-lg">
            <tr>
              <td>Product</td>
              <td>Category</td>
              <td>In Stock</td>
              <td>Price</td>
              <td>Status</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {products?.message?.products.map((i, index) => (
              <tr key={index}>
                <td className="min-w-[300px]">
                  <div className="flex gap-8 items-center">
                    <div className="img-wrap">
                      <img
                        src={i.imageUrl}
                        alt="Perfume"
                        className="w-[30px] h-[30px]"
                      />
                    </div>
                    <span>{i.name}</span>
                  </div>
                </td>
                <td className="min-w-[200px]">
                  <span>{i.category}</span>
                </td>
                <td>
                  <div className="flex items-center ">
                    <span>{i.stock}</span>{" "}
                  </div>
                </td>
                <td>
                  <div className="flex items-center">
                    <span>${i.price}</span>
                  </div>
                </td>
                <td>{statusText("published", i.published)}</td>
                <td>
                  <div className="flex items-center justify-center gap-3">
                    <span className="flex bg-yellow-500 bg-opacity-20 text-yellow-500 rounded-lg p-2">
                      <FaEdit />
                    </span>
                    <span className="flex bg-red-500 bg-opacity-20 text-red-500 rounded-lg p-2">
                      <FaTrash />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
