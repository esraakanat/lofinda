import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function WaitlistUsers({ data }) {
  return (
    <div className="overflow-x-scroll">
      <table className="w-full">
        <thead className="bg-gray-200 rounded-lg">
          <tr>
            <td>Date addd</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone number</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data.map((i, index) => (
            <tr key={index}>
              <td>
                <span>07/08/2023</span>
              </td>
              <td>
                <span>Ibrahim Sheriff</span>
              </td>
              <td>
                <div className="flex items-center">
                  <span>Ibrahimsheriff999@gmail.com</span>
                </div>
              </td>
              <td>
                <span>08125926860</span>
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
