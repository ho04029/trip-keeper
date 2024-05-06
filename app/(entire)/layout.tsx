"use client";
import Header from "../../container/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      {children}
    </div>
  );
};

export default layout;
