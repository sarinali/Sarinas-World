"use client"

import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext<{
    worldLoading: boolean;
    ready: boolean;
    setReady: React.Dispatch<React.SetStateAction<boolean>>;
    setWorldLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    worldLoading: false,
    ready: true,
    setWorldLoading: () => {},
    setReady: () => {}

});

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [worldLoading, setWorldLoading] = useState(true);
  const [ready, setReady] = useState(false);

  const value = React.useMemo(() => ({
    worldLoading,
    setWorldLoading,
    ready,
    setReady
  }), [worldLoading, ready]);

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoadingContext = () => {
  return useContext(LoadingContext);
};