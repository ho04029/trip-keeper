"use client";
import Header from "../../container/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="w-full h-min flex flex-col">{children}</div>
    </div>
  );
};

export default layout;
