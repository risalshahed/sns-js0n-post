import React from 'react';
import useBellCounter from '../hooks/useBellCounter';
import { BellCounterContext } from '../context';

const BellCounterProvider = ({ children }) => {
  const { bellCounter, handleBellCounter } = useBellCounter();

  return (
    <BellCounterContext.Provider value={{ bellCounter, handleBellCounter }}>
      { children }
    </BellCounterContext.Provider>
  );
}

export default BellCounterProvider;