import React, { createContext } from "react";
import { getStats } from "../service/admin-api-service";
import { useQuery } from "@tanstack/react-query";

export const AdminContext = createContext();
export default function AdminStatsContextWrap({ children }) {
  const { data: stats } = useQuery({
    queryFn: getStats,
    queryKey: ["stats"],
  });
  return (
    <AdminContext.Provider value={{ stats }}>{children}</AdminContext.Provider>
  );
}
