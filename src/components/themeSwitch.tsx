import React, { useEffect, useState } from 'react';
import useDarkTheme from '../../hooks/themeHook';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useThemeContextConsumer } from '../../context/themeProvider';

const ThemeSwitch = () => {
  const { hanldeModeChange } = useThemeContextConsumer();
  const [colorTheme, setTheme] = useDarkTheme();
  const [darkSide, setDarkSide] = useState<boolean>(
    colorTheme === 'light' ? true : false
  );

  useEffect(() => {
    hanldeModeChange(darkSide);
  }, []);

  const toggleDarkMode = () => {
    if(typeof setTheme === 'function') setTheme(colorTheme);
    setDarkSide(!darkSide);
    hanldeModeChange(!darkSide);
  };

  return (
    <DarkModeSwitch
      className="mr-2"
      checked={darkSide}
      onChange={toggleDarkMode}
      size={30}
    />
  );
};

export default ThemeSwitch;
