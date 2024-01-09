"use client"

// import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import loginProtocol from '../JSONFiles/protocol'
import useWeb5Initializer from '../utils/web5Initializer';
import blob from 'blob';

const SignUp = () => {

  console.log("loginProtocol:", ...[loginProtocol]);

  const { web5, did } = useWeb5Initializer();
  const configure = async () => {
  const { protocol, status } = await web5.dwn.protocols.configure({
    message: {
      definition: loginProtocol
    }
  });

  console.log("protocol:", protocol);
  }
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    walletAddress: "",
    role: "user",
    file: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const formDataToSend = new FormData(); // Use FormData for file upload
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("walletAddress", formData.walletAddress);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("file", formData.file); // Append file

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const formattedDate = tomorrow.toISOString().replace(/\.\d{3}Z$/, '.000000Z');


    // Create a mixed record
    async function createMessage({formDataToSend}) {

      const img = new Blob([blob], formDataToSend.file, { type: "image/png" })
      console.log("img:", img);

      const { record, status } = await web5.dwn.records.create({
        data: {
          image: img,
          name: formDataToSend.name,
          email: formDataToSend.email,
          wallet: formDataToSend.walletAddress,
          role: formDataToSend.role,
        },
        message: {
          protocol: loginProtocol.protocol,
          dataFormat: "application/json",
          published: true,
          schema: "https://sollertia.com/Loginprotocol/user",
          datePublished: formattedDate.toString({ smallestUnit: 'microseconds' }),
        }
      });
      console.log("record:", record);
      console.log("status:", status);
    

    const { record : signupRecord } = await web5.dwn.records.read({
      message: {
        filter: {
          recordId: record._recordId
        },
      },
    });

    
  
    // assuming the record has a text payload
    const text = await signupRecord.data.blob();
    console.log("text:", ...[text]);
  }
    // try {
    //   const image = new Image();
    //   const imageUrl = URL.createObjectURL(signupRecord.data.blob());
    //   img.src = imageUrl;
    // } catch (err) {
    //   console.error('Error:', err);
    // }
    


    toast.promise(createMessage({formDataToSend}), {
      loading: "Creating your account...",
      success: (status) => {
        return "Data Sent Successfully: ", status;
      },
      error: (err) => {
        console.log(err);
        return err.message;
      },
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-opacity-25 bg-blur w-96 p-8 rounded-md shadow-md">
        {/* <div className="imagine">
          <img src={imageUrl} alt="Thenga" />
        </div> */}
        <h3 className="text-3xl text-center font-bold text-white mb-4 md:text-5xl">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {" "}
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-black mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-black mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="walletAddress"
              className="block text-sm font-medium text-white"
            >
              Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              name="walletAddress"
              value={formData.walletAddress}
              onChange={handleChange}
              className="text-black mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="walletAddress"
              className="block text-sm font-medium text-white"
            >
              Upload you User Profile
            </label>
            <input
              type="file"
              id="file"
              name="file" // Change the name attribute to "file"
              onChange={handleChange}
              className="text-white mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-white"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md text-black"
            >
              <option value="user">User</option>
              <option value="artist">Artist</option>
              <option value="artist">Company</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 bg-lavender"
          >
            Sign Up
          </button>
        </form>
        {/* <p className="text-white mt-4">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Log in here
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default SignUp;
