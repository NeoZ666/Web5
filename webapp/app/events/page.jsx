"use client";
import React from "react";
import Navbar from "../components/Navbar";
import EventBox from "./Eventbox";

const page = () => {
  const events = [
    {
      id: 1,
      date: { day: "12", month: "Jan" },
      location: { city: "New York", country: "USA" },
      priceRange: "$20 - $50",
    },
    {
      id: 2,
      date: { day: "25", month: "Feb" },
      location: { city: "London", country: "UK" },
      priceRange: "£15 - £30",
    },
    {
      id: 3,
      date: { day: "10", month: "Mar" },
      location: { city: "Paris", country: "France" },
      priceRange: "€25 - €60",
    },
  ];
  return (
    <>
      <Navbar />
      <EventBox events={events} />
    </>
  );
};

export default page;
