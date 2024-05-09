"use client";

import React from "react";
import { redirect } from "next/navigation";
import { useConvexAuth } from "convex/react";
import Spinner from "@/components/spinner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoading && !isAuthenticated) {
    return redirect("/");
  }

  return <>{children}</>;
};

export default Layout;
