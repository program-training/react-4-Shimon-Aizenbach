import "./App.css";
import TextContextProvider from "./contexts/TextContextProvider";
import Grandpa from "./components/Grandpa/Grandpa";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import MyComponent from "./components/MyComponent/MyComponent";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ThemeSwitcher />
        <MyComponent />
      </ThemeContextProvider>
      <TextContextProvider>
        <Grandpa />
      </TextContextProvider>
    </>
  );
}

export default App;
