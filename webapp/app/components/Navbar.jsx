"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user information from local storage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
      console.log(parsedUserData);
    }
  }, []);

  const handleLogout = () => {
    // Clear the localStorage
    localStorage.clear();
    window.location.reload();
    // Redirect the user to the login or signup page after logout
    router.push("/");
  };

  return (
    <nav className="flex flex-col justify-around items-center pt-5 md:flex-row">
      <Link href="/" className="flex flex-row items-center">
        <img width={70} height={70} src="./images/MUSICHAIN.png" alt="HARSH" />
        <p>Sollertia</p>
      </Link>

      <ul className="flex gap-x-7 justify-center items-center ml-8 mb-2 md:ml-0 md:mb-0 md:gap-x-10">
        <li>
          <Link href="/artist">ARTISTS</Link>
        </li>
        <li>
          <Link href="/songs">SONGS</Link>
        </li>
        <li>
          <Link href="/events">EVENTS</Link>
        </li>
        <li>
          <Link href="/upload">UPLOAD</Link>
        </li>

        {userData ? (
          <div className="flex items-center">
            <h2 className="md:text-3xl block md:hidden">{userData?.name}</h2>
            <button
              onClick={handleLogout}
              className="block md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple md:hidden"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <br />
            <button
              onClick={() => router.push("/register")} // Corrected onClick handler
              className="hidden md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple md:hidden"
            >
              Get Started
            </button>
          </>
        )}
      </ul>

      {userData?.name ? (
        <div className="flex items-center gap-x-5">
          <h2 className="md:text-3xl">{userData?.name}</h2>
          <button
            onClick={handleLogout}
            className="hidden md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple md:block"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => router.push("/register")} // Corrected onClick handler
          className="block md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple md:block"
        >
          Get Started
        </button>
      )}
    </nav>
  );
}
