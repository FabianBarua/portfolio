import React, { createContext } from 'react'
import reactGA from 'react-ga4'
import { GA4 } from 'react-ga4/types/ga4';

export const AnalyticsContext = createContext<GA4>(reactGA);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  reactGA.initialize('G-G26XVHQF18');

  return (
    <AnalyticsContext.Provider value={reactGA}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;