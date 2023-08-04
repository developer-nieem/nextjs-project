"use client";

import React, { createContext } from 'react';


export const ThemeContext =  createContext();



const ThemeProvider = ({children}) => {
    const name =  'nieem'
    return (
        <ThemeContext.Provider value={{name}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;