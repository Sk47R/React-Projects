import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./Context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro></Intro>
      <About></About>
      <ProductList></ProductList>
      <Contact></Contact>
    </div>
  );
};

export default App;
