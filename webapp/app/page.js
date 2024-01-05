"use client";

import { Web5 } from "@web5/api";
import { useState } from "react";

export default function Home() {
  const [web5, setweb5] = useState("");
  const [did, setDid] = useState("");

  const configuration = async () => {
    const { web5, did } = await Web5.connect();
    setweb5(web5);
    setDid(did);
  };

  return (
    <>
      <h1 className="mb-10">Web5 React Example</h1>

      {/* <h1>{did}</h1>

      <h1>{web5}</h1> */}

      <button onClick={configuration}>Connect to the Web5 Network</button>

      <h1>Hello : {did} </h1>
      <p>{web5 ? `Connected to ${web5}` : ""}</p>

      <div style={{ display: !web5 || !did ? "none" : undefined }} />
    </>
  );
}
