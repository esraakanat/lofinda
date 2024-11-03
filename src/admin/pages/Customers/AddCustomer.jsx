import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import adminApiReq from "../../../utils/adminApiWithAuth";
import swalNotify from "../../../utils/swal";

export default function AddCustomer() {
  const navigate = useNavigate();

  // State to hold form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    username: "",
    password: "123456",
  });
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    try {
      setLoading(true);
      const response = await adminApiReq("/api/auth/signup", "POST", formData);
      console.log(response);
      swalNotify("success", "Success!", response.message);
    } catch (error) {
      console.log(error);
      swalNotify("error", "Error!", error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="wrap lg:w-1/2 mx-auto p-3 lg:px-0 h-full">
        <div className="form-wrap mb-32 p-5 rounded-lg border">
          <div className="header flex gap-3 items-center my-5">
            <span
              className="text-lg bg-gray-100 rounded-lg p-2 px-3 cursor-pointer"
              onClick={() => navigate("/administration/customer/")}
            >
              <FaArrowLeft />
            </span>
            <h1 className="text-3xl font-bold">Add new customer</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <div className="input-wrap">
                <label className="text-sm">
                  Firstname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                  placeholder="Ayomide"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-wrap">
                <label className="text-sm">
                  Lastname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastname"
                  className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                  placeholder="Basit"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-wrap my-4">
              <label className="text-sm">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                placeholder="sheezey@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-wrap my-4">
              <label className="text-sm">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="username"
                className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                placeholder="love11"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-wrap">
              <label className="text-sm">Phone number</label>
              <input
                type="text"
                name="phone"
                className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                placeholder="08123458598"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrap mb-5">
              <label className="text-sm">Address</label>
              <input
                type="text"
                name="address"
                className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                placeholder="Somewhere, Egbeda, Lagos state, Nigeria"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="btn-wrap absolute left-0 bottom-0 bg-gray-900 w-full px-10 py-3 flex justify-end">
              <div className="wrap flex gap-5 items-center">
                <button className="rounded-lg p-3 bg-white text-black mr-3">
                  Cancel
                </button>
                <button className="rounded-lg p-3 bg-primary text-white flex justify-center items-center">
                  {loading ? (
                    <ClipLoader size={30} color="#fff" />
                  ) : (
                    "Add  Customer"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
