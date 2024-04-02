import { createContext, useState } from "react";
import PropTypes from "prop-types";
/*
Use context in order to send the value of dark or light mode to other components
*/
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [contextTheme, setContextTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const values = { contextTheme, setContextTheme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
