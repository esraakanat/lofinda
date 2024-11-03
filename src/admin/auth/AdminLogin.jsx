import React from "react";

export default function AdminLogin() {
  return (
    <div className="wrap h-[100vh] w-full flex justify-center items-center">
      <div className="form shadow-md border-t rounded-lg p-5 lg:w-[40%] w-full">
        <div className="header">
          <h1 className="font-bold text-2xl">
            <span className="text-primary"> Lofinda.ng</span> Admin
            Authentication
          </h1>
        </div>
        <div className="input-wrap mt-5">
          <input
            type="email"
            className="p-2 w-full border border-gray-400 rounded-lg"
            placeholder="email@abc.com"
            required
          />
          <input
            type="password"
            className="p-2 w-full border border-gray-400 rounded-lg my-3"
            placeholder="Password"
            required
          />
          <div className="btn-wrap">
            <button className="bg-black text-white p-2 w-full hover:bg-white hover:border-black border hover:text-black transition-all rounded-lg">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
