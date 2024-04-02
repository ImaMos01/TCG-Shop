import { ThemeContext } from "../Context/ThemeContext";

import { useContext } from "react";

export default function useThemeContext() {
  /*
  share the value of theme through components

  return
    useState of light or dark mode 
  */

  const context = useContext(ThemeContext);
  return context;
}
