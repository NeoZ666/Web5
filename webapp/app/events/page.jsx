"use client";
import React from "react";
import Navbar from "../components/Navbar";
import EventBox from "./Eventbox";
import { FaPlusCircle } from "react-icons/fa";
import Link from "next/link";

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
    {
      id: 4,
      date: { day: "12", month: "Jan" },
      location: { city: "New York", country: "USA" },
      priceRange: "$20 - $50",
    },
    {
      id: 5,
      date: { day: "25", month: "Feb" },
      location: { city: "London", country: "UK" },
      priceRange: "£15 - £30",
    },
    {
      id: 6,
      date: { day: "10", month: "Mar" },
      location: { city: "Paris", country: "France" },
      priceRange: "€25 - €60",
    },
  ];
  return (
    <>
      <Navbar />
      {/* <EventBox events={events} /> */}
      <div className="flex justify-between mx-5 mt-5 md:mt-10 md:mx-20">
        <h1 className="text-3xl font-bold">
          Add your new <span className="text-lavender">Event</span>
        </h1>
        <Link href='/new-event'>
          <button className="flex items-center text-2xl gap-x-2 bg-gradient-to-r from-dark_purple to-lavender px-5 py-2 rounded-lg">
            {" "}
            <FaPlusCircle /> <span>ADD</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default page;
