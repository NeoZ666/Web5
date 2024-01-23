"use client"

import HomePage from "./components/Homepage";
import { useEffect } from 'react';

// IMPORTING TO GET DID AND WEB5 : 
import useWeb5Initializer from './utils/web5Initializer';

export default function Home() {
  const { web5, did } = useWeb5Initializer();

  useEffect(() => {
    // Use web5 and did here
    console.log('web5:', web5);
    console.log('did:', did);
  }, [web5, did]);


  return (
    <>
      <HomePage />
    </>
  );
}
  