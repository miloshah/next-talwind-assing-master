import { useEffect, useMemo, useState } from 'react';

export default function useDarkTheme() {
  const [theme, setTheme] = useState<string | React.Dispatch<string>>(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    typeof theme === 'string' && root.classList.add(theme);
    typeof theme === 'string' && localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
