"use client";

import Navbar from "../components/Navbar";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

const page = () => {
  // const router = useRouter();

  const handleSubmit = () => {};
  return (
    <div>
      <Navbar />
      <div className="w-[100%] flex flex-col mx-4 md:mx-0 md:flex-row items-center justify-center md:mt-10 md:gap-x-10">
        <img className="w-[420px]" src="./images/MUSIC.png" alt="MUSIC" />
        <div className="flex flex-col justify-center items-center bg-opacity-25 bg-blur w-96 p-8 rounded-md shadow-md bg-slate-500">
          <h3 className="text-3xl font-bold text-white mb-7 md:text-5xl text-center">
            YOUR NEW EVENT
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              {" "}
              <label
                htmlFor="songName"
                className="block text-sm font-medium text-white"
              >
                Song Name
              </label>
              <input
                type="text"
                id="songName"
                name="songName"
                // value={formData.songName}
                // onChange={handleChange}
                className="text-black mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="songDesc"
                className="block text-sm font-medium text-white"
              >
                Song Description
              </label>
              <input
                type="text"
                id="songDesc"
                name="songDesc"
                // value={formData.songDesc}
                // onChange={handleChange}
                className="text-black mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="songTrack"
                className="block text-sm font-medium text-white"
              >
                Upload your Track :
              </label>
              <input
                type="file"
                id="songTrack"
                name="songTrack" // Change the name attribute to "file"
                // onChange={handleChange}
                className="text-white mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="songFile"
                className="block text-sm font-medium text-white"
              >
                Upload your Cover Image :
              </label>
              <input
                type="file"
                id="songFile"
                name="songFile" // Change the name attribute to "file"
                // onChange={handleChange}
                className="text-white mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-5 bg-blue-500 text-white bg-lavender p-2 rounded-md hover:bg-blue-600"
            >
              UPLOAD YOUR TRACK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
