import React, { useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import styles from "@/styles/dashboard.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BloggerOne from "@/assets/BloggerOne.jpg";
const DashboardLayout = ({ children }) => {
  const routes = useRouter();
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#051647] h-[6rem] flex items-center justify-between p-4">
        <div className="flex gap-x-4 items-center">
          <h2
            onClick={() => {
              routes.push("http://localhost:3000/");
            }}
            className="text-white text-2xl font-semibold cursor-pointer"
          >
            Dashboard
          </h2>
        </div>
        <div className="flex flex-col gap-y-1 items-center">
          {/* <BsFillPersonFill size={30} className="text-white" /> */}
          <Image
            src={BloggerOne}
            width={100}
            height={100}
            className="w-[50px] h-[50px] rounded-full"
            alt="blogger"
          />
          <p className="text-white text-sm font-semibold">Ashikur Rahman</p>
        </div>
      </div>
      <div className={`${styles.sidebarContentContainer}`}>
        <div className={`${styles.sidebar}`}>
          <Sidebar />
        </div>
        <div className={`${styles.contentContainer}`}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
