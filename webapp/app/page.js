"use client";

// Import necessary Next.js modules
import { useState } from 'react';
import { Web5 } from "@web5/api";
import blob from 'blob';
// import { web } from 'webpack';

export default function Home() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  // const [text, setText] = useState(null);
  const [something, setsome] = useState(null);

  const BlobProtocol = {
    protocol: "www.sollertia.xyz",
    published: true,
    types: {
      blob: {
        schema: "www.sollertia.xyz/blob",
        dataFormats: [
          "image/png",
          "image/jpeg",
          "audio/mpeg"
        ]
      }
    },
    structure: {
      blob: {
        $actions: [
          {
            who: "anyone",
            // of: "blob",
            can: "read"
          },
          {
            who: "anyone",
            // of: "blob",
            can: "write"
          }
        ]
      }
    }
  }

  // async function createRecord(agent, data, message, remote) {

  //   const { record, status } = await agent.web5.dwn.records.create({
  //     data,
  //     message: Object.assign({
  //       ...message,
  //       protocol: BlobProtocol.protocol,
  //     })
  //   });

  //   if (!record) {
  //     console.error("Failed to create record:", status.detail);
  //     return false;
  //   }

  //   if (remote) {
  //     const { status: syncStatus } = await record.send(agent.did);

  //     if (syncStatus.code !== 202) {
  //       console.log("Failed to sync record protocol with remote DWN:", syncStatus);
  //       return false;
  //     }
  //   }

  //   const { status: syncStatus } = await record.send(agent.did);

  //   if (syncStatus.code !== 202) {
  //     console.log("Failed to sync record with remote DWN:", syncStatus);

  //     if (remote)
  //       return false;
  //   }

  //   return record;
  // }

  const configuration = async () => {
    const { web5, did } = await Web5.connect();
    setsome(web5);

    const { protocol } = await web5.dwn.protocols.configure({
      message: {
        definition: BlobProtocol
      },
    });
    const definition = protocol.definition;
    console.log("PROTOCOL DEFINITION : ", definition);

    const { protocols } = await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: 'https://dschema.org/v0.0.10b/protocols/blob/schema/blob.json',
        },
      },
    });

    // DONO JAA RAHE HAI ACHE SE. DON'T CNANGE the keyword "record" or Upload/Read won't work.
    if (!file) {
      console.error('No file selected');
      return;
    }

    console.log("file:", file);
    const { record, status } = await web5.dwn.records.create({
      data: new Blob([blob], file, { type: file.type }),
      message: {
        schema: BlobProtocol.types.blob.schema,
        protocolPath: "blob",
        dataFormat: file.type,
        published: BlobProtocol.published,
        protocol: BlobProtocol.protocol,
      }
    });
    console.log("record:", record);
    console.log("status:", status);
    console.log("record.dataCid:", record.dataCid);

    // let { record:recordResults } = await web5.dwn.records.read({
    //   message: {
    //     filter: {
    //       recordId: record.id,
    //     },
    //   },
    // });

    // // assuming the record has a text payload
    // const image = await recordResults.data.blob();
    // console.log("image:", image);

    const response = await web5.dwn.records.query({
      from: did,
      message: {
        filter: {
          protocol: BlobProtocol.protocol,
          schema: BlobProtocol.types.blob.schema,
        },
      },
    });

    if (response.status.code === 200) {
      const result = await Promise.all(
        response.records.map(async (record) => {
          const data = await record.data.blob();
          return {
            ...data,
            recordId: record.id,
          };
        })
      );
      console.log(result);
    }

    let { record: res } = await web5.dwn.records.read({
      message: {
        filter: {
          recordId: result[0].recordId,
        },
      },
    });
  
    // assuming the record has a text payload
    const text = await res.data.blob();
    setImage(text);

    const linked = URL.createObjectURL(text);
    img.src = linked;s

      // const record = await createRecord(
      //   {
      //     web5,
      //     did
      //   },
      //   new Blob([file], { type: file.type }),
      //   {
      //     schema: BlobProtocol.types.blob.schema,
      //     protocolPath: "blob",
      //     dataFormat: file.type,
      //     published: BlobProtocol.published,
      //   },
      //   true
      // )
    }
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
            <img src={linked} alt="Uploaded Image" />
          </div>
        </form>
      </>
    );
}