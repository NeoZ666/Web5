"use client";

import { Web5 } from "@web5/api";
import protocolJSON from "./protocol.json";
import structureJSON from "./structure.json"

export default function Home() {

  // console.log( "JSON : ", Structurejson);
  // console.log( "TYPES : ", protocolJson.types);

  const configuration = async () => {
    const { web5, did } = await Web5.connect();
    console.log("web5", web5);
    console.log("did", did);

    console.log("DONE !!!!!")

    /////////////
    console.log("Structure JSON : ", structureJSON.structure);
    console.log("Protocol JSON: ", protocolJSON.types);

    /////////////

    const { protocol } = await web5.dwn.protocols.configure({
      message: {
        definition: {
          "protocol": "https://sollertia/protocol",
          "published": true,
          "types": protocolJSON.types,
          "structure" : structureJSON.structure
        }
      },
    });
    const definition = protocol.definition;
    console.log("DEFINATION : ", definition);
  }

  return (
    <>
      <h1 className="mb-10">Web5 React Example</h1>
      <button onClick={configuration}>Connect to the Web5 Network</button>
    </>
  );
}