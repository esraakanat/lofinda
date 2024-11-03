import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getUsers } from "../../../service/admin-api-service";

export default function OrderUser() {
  const { data: users = {} } = useQuery({
    queryFn: () => getUsers(), // Corrected to pass the function reference
    queryKey: ["users"],
  });

  return (
    <div className="overflow-x-scroll">
      <table className="w-full">
        <thead className="bg-gray-200 rounded-lg">
          <tr>
            <td>Date added</td>
            <td>Name</td>
            <td>Address</td>
            <td>Email</td>
            <td>Phone number</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {users?.info?.users?.map((i, index) => (
            <tr key={index} className="font-thin">
              <td>
                <span>07/08/2023</span>
              </td>
              <td>
                <span>
                  {i.firstname} {i.lastname}
                </span>
              </td>
              <td>
                <div className="flex items-center">
                  <span>{i.address}</span>{" "}
                </div>
              </td>
              <td>
                <div className="flex items-center">
                  <span>{i.email}</span>
                </div>
              </td>
              <td>
                {i.phone ? (
                  i?.phone
                ) : (
                  <span className="text-xs font-thin">"no number yet"</span>
                )}
              </td>
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
  );
}
