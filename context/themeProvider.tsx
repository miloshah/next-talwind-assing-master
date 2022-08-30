import React, { useContext } from 'react';

interface ThemeContextInterface {
  mode: boolean;
  hanldeModeChange: (val: boolean) => void;
}

const ThemeContext = React.createContext<ThemeContextInterface | null>(null);

export function useThemeContextConsumer() {
  return useContext(ThemeContext);
}

interface ThemeContextProviderProps {
  children?: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = React.useState<boolean>(false);

  const hanldeModeChange = (val: boolean) => {
    setMode(val);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode: mode,
        hanldeModeChange: hanldeModeChange,
      }}
    >
      {children && children}
    </ThemeContext.Provider>
  );
};
