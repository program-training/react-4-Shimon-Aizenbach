import React, { useContext } from "react";
import { ModeContext } from "../../contexts/ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const context = useContext(ModeContext);
  if (!context) return null;
  const { mode, setMode } = context;
  return (
    <button
      onClick={() => (mode === `dark` ? setMode(`light`) : setMode(`dark`))}
    >
      Change Color
    </button>
  );
};

export default ThemeSwitcher;
