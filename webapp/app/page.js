"use client";

import { Web5 } from "@web5/api";
import protocolJSON from "./protocol.json";
import structureJSON from "./structure.json";

export default function Home() {
  // console.log( "JSON : ", Structurejson);
  // console.log( "TYPES : ", protocolJson.types);

  const harshDid =
    "did:ion:EiB6Nm_6iubsqNFmajuOeCxilttwcTGxaTQuAcEwa5lUmQ:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoidGhqalRsNlMxMnlMNUVKdEFWalhadmdRLTN0S2RzQzFiRHpLeXJXcmh6USJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJhWlNaSnhnRHRyWFliQTFFc1dwNk9wX1ZBbjFQYTNBYWw3Y0Rsb2RSTUhzIiwieSI6Imd3NDhFQk9YODJRUm5MellfeWtRejNmc2lEaWpxRk1SUHYzV083N1V1akEifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNCIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNSJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlEUHAxeENaTXdLLXdIVElqZVRuclQ0MW9LcVJGSG5idE9qRFh6bUl5ODRBdyJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQWlRTXA1dHB6UjZCQUR0TTBFMkFRcFJFUXptUWhVZnFSb3MxaWdFaFBieHciLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUF3NFpRNzNsRnZzYm1QaXJ6dG9rZENFUEZSdkxSN2RNSjU5aVdqcU5UT1BBIn19";

  const configuration = async () => {
    const { web5, did } = await Web5.connect();
    console.log("web5", web5);
    console.log("did", did);

    /////////////
    console.log("Structure JSON : ", structureJSON.structure);
    console.log("Protocol JSON: ", protocolJSON.types);
    /////////////

    const { protocol } = await web5.dwn.protocols.configure({
      message: {
        definition: {
          protocol: "https://sollertia/protocol",
          published: true,
          types: protocolJSON.types,
          structure: structureJSON.structure,
        },
      },
    });
    const definition = protocol.definition;
    console.log("DEFINATION : ", definition);

    // QUERY :
    // const { protocols } = await web5.dwn.protocols.query({
    //   message: {
    //     filter: {
    //       protocol: "https://sollertia/protocol",
    //     },
    //   },
    // });
    // console.log(protocols);

    // Create the user into our local DWN :
    const { record } = await web5.dwn.records.create({
      data: "HELLO HERE, FROM HARSH",
      message: {
        recipient: harshDid,
        schema: "https://sollertia/protocol",
        dataFormat: "application/json",
      },
    });
    console.log(record);

    // this creates a record and stores it in the user's local DWN
    // const { record } = await web5.dwn.records.create({
    //   data: "Hello World!",
    //   message: {
    //     contextId: did,
    //     parentId: did,
    //     protocol: "https://sollertia/protocol",
    //     protocolPath: "Artist/Subscriber",
    //     dataFormat: "text/plain",
    //   },
    // });

    const { status: nilanchalStatus } = await record.send(did);

    const { status: harshStatus } = await record.send(harshDid);

    console.log("NILANCHALA PANDA : ", nilanchalStatus);
    console.log("HARSH JAIN :", harshStatus);
  };

  return (
    <>
      <h1 className="mb-10">Web5 React Example</h1>
      <button onClick={configuration}>Connect to the Web5 Network</button>
    </>
  );
}
