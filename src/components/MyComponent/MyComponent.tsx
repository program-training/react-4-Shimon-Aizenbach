import "./MyComponent.css";
import React, { useContext } from "react";
import { ModeContext } from "../../contexts/ThemeContext";

const MyComponent: React.FC = () => {
  const context = useContext(ModeContext);
  if (!context) return null;
  const { mode } = context;
  return (
    <div className={`my-component-${mode}`}>
      <h2>Test</h2>
      <p>step 2</p>
    </div>
  );
};

export default MyComponent;
