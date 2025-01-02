import { useState } from "react";

const useBellCounter = () => {
  // const [bellCounter, setBellCounter] = useState(0);
  // Save the value in the local storage
  const [bellCounter, setBellCounter] = useState(() => {
    const storedCounter = localStorage.getItem('bellCounter');
    return storedCounter ? parseInt(storedCounter, 10) : 0;
  })

  const handleBellCounter = () => {
    setBellCounter(prev => {
      const newCounter = prev + 1;
      localStorage.setItem('bellCounter', newCounter);
      return newCounter;
    });
  }

  return { bellCounter, handleBellCounter };
}

export default useBellCounter;