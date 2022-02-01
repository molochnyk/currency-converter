import { useEffect, useState } from "react";

const useThemeMode = () => {
  const [theme, setTheme] = useState("dark");

  const setMode = (mode) => {
    window.localStorage.setItem("curtheme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("curtheme");
    localTheme ? setTheme(localTheme) : setMode("dark");
  }, []);

  return [theme, toggleTheme];
};

export default useThemeMode;
