"use client";
import Header from "../../container/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      {children}
    </div>
  );
};

export default layout;
