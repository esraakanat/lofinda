import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Layout from "../../Layout/Layout";
import { purpleBtnClass } from "../../../utils/classes";
import { useNavigate } from "react-router-dom";
import { RxUpload } from "react-icons/rx";

export default function AddProduct() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="wrap lg:w-1/2 mx-auto p-3 lg:px-0 h-full">
        <div className="form-wrap mt-5 mb-[30px] p-5 rounded-lg border">
          <div className="header flex gap-3 items-center my-5">
            <span
              className="text-lg bg-gray-100 rounded-lg p-2 px-3 cursor-pointer"
              onClick={() => navigate("/administration/product")}
            >
              <FaArrowLeft />
            </span>
            <h1 className="text-3xl font-bold">Add new Product</h1>
          </div>

          <form>
            <div className="img-wrap bg-slate-100 p-5 rounded-lg text-center">
              <RxUpload className="mx-auto" />
              <span>
                Add product Image <span className="text-red-500">*</span>
              </span>
            </div>
            <div className="input-wrap">
              <label className="text-sm">
                Product name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                placeholder="Name"
              />
            </div>
            <div className="input-wrap my-4">
              <label className="text-sm">Short Description</label>
              <input
                type="text"
                className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                placeholder="Enter short description"
              />
            </div>
            <div className="input-wrap">
              <label className="text-sm">Select Collection</label>
              <select className="p-2 w-full bg-gray-100 rounded-lg text-gray-400">
                <option value="#" defaultChecked>
                  Choose Collection
                </option>
                <option value="#">Kindle Collection</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="input-wrap">
                <label className="text-sm">
                  Price <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                  placeholder="Price"
                />
              </div>
              <div className="input-wrap">
                <label className="text-sm">
                  Stock / Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                  placeholder="Total quantity"
                />
              </div>
            </div>
            <div className="btn-wrap absolute left-0 bottom-0 bg-gray-900 w-full px-10 py-3 flex justify-end">
              <div className="wrap">
                <button className="rounded-lg p-3 bg-white text-black mr-3">
                  Save as Draft
                </button>
                <button className="rounded-lg p-3 bg-primary text-white">
                  Publish Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
