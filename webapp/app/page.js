"use client";

// Import necessary Next.js modules
import { useEffect, useState } from "react";
import { Web5 } from "@web5/api/browser";

// useEffect(() => {
//   import { Web5 } from "@web5/api/browser";
// }, []);

export default async function Home() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  // const [text, setText] = useState(null);

  const NiluDid =
    "did:ion:EiCwShHnOLZcJk7eh6Tk19JHRDb4qAqDSpuwdLGIkV8YvQ:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoibC1Pb2ZWZDV6QmEyejV4cWhSdW1EQ0F3a2JqT1UtNlJRaWxuaTRqekhIMCJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJxSWRDc2EzajRrcV92eW5BaDdCUmJybk9INEpOR0ZFQk15eEFLQlh0V2swIiwieSI6IjZlRldYbmFtbVl2bXNYeXhUSGVHZl9HTjhGUm5RdFo1N3NydE1KSnZwblUifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNCIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNSJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlCY3FIZXBVb2xMQkNyWDN6bndGTmxpQzRRd3dJMWJFS3hjUHNyUEZHQ1BJZyJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpRFh2TEtLRWswei0xY21xYThuRFhDRndGTzN1ODFRekpvdlRZenlIOF9fT1EiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUJtb2ozRTA4TGozbGkzT1lGdVQ1UUFEZlIxa3ZCNzMycEEwOEVjUnpQUnBRIn19";

  const configuration = async () => {
    const { web5, did } = await Web5.connect();

    const { protocol } = await web5.dwn.protocols.configure({
      message: {
        definition: {
          protocol: "https://sollertia/protocol",
          published: true,
          types: {
            Listener: {
              schema: "https://sollertia/protocol/Listener",
              dataFormats: ["text/plain"],
            },
            canAccessSong: {
              schema: "https://sollertia/protocol/canAccessSong",
              dataFormats: ["text/plain"],
            },
            Song: {
              schema: "https://sollertia/protocol/Song",
              dataFormats: ["application/octet-stream"],
            },
            canAccess: {
              schema: "https://sollertia/protocol/canAccess",
              dataFormats: ["text/plain"],
            },
          },
          structure: {
            Artist: {
              Subscriber: {
                $contextRole: true,
              },
              canAccessSong: {
                $actions: [{ role: "Artist/Subscriber", can: "read" }],
              },
            },

            Song: {
              $actions: [
                { who: "anyone", can: "read" },
                { who: "anyone", can: "write" },
              ],
              Company: {
                $contextRole: true,
              },
              canAccess: {
                $actions: [{ role: "Song/Company", can: "read" }],
              },
            },
          },
        },
      },
    });
    const definition = protocol.definition;
    console.log("PROTOCOL DEFINITION : ", definition);

    //   const { record: postRecord, status: createStatus } = await web5.dwn.records.create({
    //     data: 'Hey this is my first post!',
    //     message: {
    //       protocol: "https://sollertia/protocol",
    //       protocolPath: 'canAccess',
    //       recipient: NiluDid,
    //       schema: "https://sollertia/protocol/canAccess",
    //       dataFormat: 'text/plain'
    //     }
    //   });

    // console.log("POST RECORD : ", postRecord);
    // this creates a record and stores it in the user's local DWN
    const replyResponse = await web5.dwn.records.create({
      data: "You can access the song now",
      message: {
        recipient:
          "did:ion:EiCwShHnOLZcJk7eh6Tk19JHRDb4qAqDSpuwdLGIkV8YvQ:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoibC1Pb2ZWZDV6QmEyejV4cWhSdW1EQ0F3a2JqT1UtNlJRaWxuaTRqekhIMCJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJxSWRDc2EzajRrcV92eW5BaDdCUmJybk9INEpOR0ZFQk15eEFLQlh0V2swIiwieSI6IjZlRldYbmFtbVl2bXNYeXhUSGVHZl9HTjhGUm5RdFo1N3NydE1KSnZwblUifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNCIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNSJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlCY3FIZXBVb2xMQkNyWDN6bndGTmxpQzRRd3dJMWJFS3hjUHNyUEZHQ1BJZyJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpRFh2TEtLRWswei0xY21xYThuRFhDRndGTzN1ODFRekpvdlRZenlIOF9fT1EiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUJtb2ozRTA4TGozbGkzT1lGdVQ1UUFEZlIxa3ZCNzMycEEwOEVjUnpQUnBRIn19",
        contextId:
          "bafyreic4flpi2a346n6i25rd4rfjyjsga2njf4ognsfalu3scc3jblfx2u",
        parentId: "bafyreic4flpi2a346n6i25rd4rfjyjsga2njf4ognsfalu3scc3jblfx2u",
        protocol: "https://sollertia/protocol",
        protocolPath: "Song/canAccess",
        schema: "https://sollertia/protocol/canAccess",
        dataFormat: "text/plain",
      },
    });
    console.log("REPLY RESPONSE : ", replyResponse);

    // DONO JAA RAHE HAI ACHE SE. DON'T CNANGE the keyword "record" or Upload/Read won't work.
    if (!file) {
      console.error("No file selected");
      return;
    }

    // Upload the file
    const blob = new Blob(file, { type: "image/png" });
    const { record } = await web5.dwn.records.create({
      data: blob,
      message: {
        dataFormat: "image/png",
      },
    });

    console.log("RECORD : ", record);
    console.log("RECORD ID : ", record._recordId);

    // READ: TEXT HO RAHA HAI BUT IMAGE NAHI
    let { recordNew } = await web5.dwn.records.read({
      message: {
        filter: {
          recordId:
            "bafyreibmpu4sinoumlhxolbquzni4sbxnbgr6qin2s4jido6noctdpbmva",
        },
      },
    });
    console.log("yaha tak hua hai");
    // assuming the record has a text payload
    const text = await recordNew.data.text();
    setImage(text);
    console.log("Record Data Text:", text);
  };
  // let { record } = await web5.dwn.records.read({
  //   message: {
  //     filter: {
  //       recordId: "bafyreibmpu4sinoumlhxolbquzni4sbxnbgr6qin2s4jido6noctdpbmva",
  //     },
  //   },
  // });
  console.log("yaha tak hua hai");
  // assuming the record has a text payload
  const text = await record.data.text();
  setImage(text);
  console.log("Record Data Text:", text);

  // Function to handle file input change
  const handleFileChange = (event) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile);
    console.log("fileSet:", selectedFile);
  };

  return (
    <>
      <h1 className="mb-10">Web5 React Example</h1>
      <form>
        <label>
          Upload File:
          <input type="file" onChange={handleFileChange} />
        </label>
        <button type="button" onClick={configuration}>
          Connect to the Web5 Network
        </button>
        <br />
        <div>
          <img
            src={`data:image/jpeg;base64,${btoa(
              String.fromCharCode.apply(null, image)
            )}`}
            alt="Uploaded Image"
          />
        </div>
      </form>
    </>
  );
}
