"use client";

import { Web5 } from "@web5/api";
// import protocolJson from "./protocol.json";
// import Structurejson from "./structure.json";

export default function Home() {

  // console.log( "JSON : ", Structurejson);
  // console.log( "TYPES : ", protocolJson.types);

  const configuration = async () => {
    const { web5, did } = await Web5.connect();
    console.log("web5", web5);
    console.log("did", did);

    console.log("DONE !!!!!")
    // const { protocol, status } = await web5.dwn.protocols.configure({
    //   "message": {
    //     "definition": {
    //       "protocol": "https://sollertia/protocol",
    //       "published": true,
    //       // "types": protocolJson.types,
    //       // "structure": Structurejson
    //     }
    //   }
    // });

    // configuration();

    // console.log("Protocol and status", protocol + " " + status);

    // Query
    // const { protocols, q_status } = await web5.dwn.protocols.query({
    //   message: {
    //     filter: {
    //       protocol: 'https://sollertia/protocol',
    //     },
    //   },
    //   // logs an array of protocol configurations installed on the user's DWN
    // });

    // console.log("Protocols and status", protocols + " " + q_status);
    return (
      <>
        <h1 className="mb-10">Web5 React Example</h1>
        <button onClick={configuration}>Connect to the Web5 Network</button>
      </>
    );
  }
}