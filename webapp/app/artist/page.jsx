"use client";

import React from "react";
import Navbar from "../components/Navbar";
import "../../app/globals.css";


const page = () => {
  return (
    <>
      <Navbar />
      <div className="absolute left-[900px] top-[200px] w-[200px] h-[160px] -z-10 inset-0 gradient-01 md:w-[500px]"></div>
      Artist
    </>
  );
};

export default page;
