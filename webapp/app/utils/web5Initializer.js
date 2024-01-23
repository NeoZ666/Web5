"use client";

import { useEffect, useState } from 'react';

const useWeb5Initializer = () => {
  const [web5, setWeb5] = useState(null);
  const [did, setDid] = useState(null);

  useEffect(() => {
    const initializeWeb5 = async () => {
      try {
        // @ts-ignore
        const { Web5 } = await import('@web5/api/browser');
        const { web5, did } = await Web5.connect();
        setWeb5(web5);
        setDid(did);
        console.log(web5);
        if (web5 && did) {
          console.log('Web5 initialized');
        }
      } catch (error) {
        console.error('Error initializing Web5:', error);
      }
    };

    initializeWeb5();
  }, []);

  return { web5, did };
};

export default useWeb5Initializer;