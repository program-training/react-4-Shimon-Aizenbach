import Child from "../Child/Child";
import React, { useContext, useState } from "react";
import { TextContext } from "../../contexts/TextContextProvider";

const Father: React.FC = () => {
  const context = useContext(TextContext);
  const [ inputText, setInputText ] = useState<string>(``);
  if (!context) return null;
  const { setText } = context;
  return (
    <div>
      {Child && <Child />}
      <input type="text" onChange={(e) => setInputText(e.target.value)} />
      <button onClick={() => setText(inputText)}>
        Click here to change text
      </button>
    </div>
  );
};

export default Father;
