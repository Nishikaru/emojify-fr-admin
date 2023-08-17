"use client";
import React, { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import { useRouter } from "next/navigation";

const ProtectedRout = ({ children }) => {
  const { loginStat } = useContext(ContextAPI);
  const router = useRouter();
  if (!loginStat) router.push("/login");

  return <>{children}</>;
};

export default ProtectedRout;
