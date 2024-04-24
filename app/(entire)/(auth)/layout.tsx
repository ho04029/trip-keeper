"use client";

import React from "react";
import { redirect } from "next/navigation";
import { useConvexAuth } from "convex/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useConvexAuth();

  if (!isAuthenticated) {
    return redirect("/");
  }

  return <>{children}</>;
};

export default Layout;
