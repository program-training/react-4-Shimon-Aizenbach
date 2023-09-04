import "./App.css";
import React, {useContext} from "react"
import Grandpa from "./components/Grandpa/Grandpa"; 
import TextContextProvider, {TextContext} from "./contexts/TextContextProvider";

function App() {
  return (
    <>
      <TextContextProvider>
        <Grandpa />
      </TextContextProvider>
    </>
  );
}

export default App;
