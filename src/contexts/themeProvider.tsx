import { ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeContext, themes } from "./themeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeValue, setThemeValue] = useState(themes.light);

  useEffect(() => {
    const persistedTheme: string = JSON.parse(localStorage.getItem('currentTheme')!)
    if (persistedTheme) {
      setThemeValue(persistedTheme);
    }
  }, [themeValue]);

  const toggleTheme = () => {
    setThemeValue((prevValue) =>
      prevValue === themes.dark ? themes.light : themes.dark
    );
  };

  const contextValue = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme,
    };
  }, [themeValue]);
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
