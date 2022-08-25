import React, { useContext } from 'react';

const ThemeContext = React.createContext();

export function useThemeContextConsumer() {
  return useContext(ThemeContext);
}

export function ThemeContextProvider({ children }) {
  const [mode, setMode] = React.useState();

  const hanldeModeChange = (val) => {
    setMode(val);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode: mode,
        hanldeModeChange: hanldeModeChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
