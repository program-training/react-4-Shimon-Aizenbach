import React, { createContext, useState } from "react";

interface ThemeContextType {
  mode: `dark` | `light`;
  setMode: React.Dispatch<React.SetStateAction<`dark` | `light`>>;
}

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ModeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = (props) => {
  const [mode, setMode] = useState<`dark` | `light`>(`dark`);
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {props.children}
    </ModeContext.Provider>
  );
};
export default ThemeContextProvider;
