import React from 'react'
import loginConfigure from '../JSONFiles/protocol'


const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const formattedDate = tomorrow.toISOString().replace(/\.\d{3}Z$/, '.000000Z');

// Create a mixed record
async function createMessage(image, name, email, wallet, role) {
  const { record, status } = await web5.dwn.records.create({
    data: {
      image: new Blob([blob], image, { type: image.type }),
      name: name,
      email: email,
      wallet: wallet,
      role: role,
    },
    message: {
    protocol: loginProtocol.protocol,
    dataFormat: "application/json",
    published: true,
    datePublished: tomorrow.toString({smallestUnit: 'microseconds' }),
    }
  });
  console.log("record:", record);
  console.log("status:", status);
}

const Page = () => {

  return (
    <div>Page</div>
  )
}

export default Page