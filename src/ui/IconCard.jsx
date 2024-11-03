import React from "react";

export default function IconCard({ value, text, icon, link }) {
  return (
    <div className="wrap">
      <div className="card flex items-center justify-between rounded-lg bg-primary bg-opacity-20 p-5">
        <div className="wrap">
          <span className="text-2xl font-bold">{value}</span> <br />
          <span className="text-sm">{text}</span>
        </div>
        <div className="icon-box text-2xl flex">
          <span className="flex p-1 rounded-lg bg-white text-primary">
            {icon}
          </span>
        </div>
      </div>
    </div>
  );
}
