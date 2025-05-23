
import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {

  const [themeMode, setThemeMode] = useState("light"); // or "dark"
  const darkTheme = () => {
    setThemeMode("dark");
  }
  const lightTheme = () => {
    setThemeMode("light");
  }

  // actually, you can use the themeMode state to conditionally apply classes to your components
    useEffect(() => {
      document.querySelector("html").classList.remove("light", "dark");
      document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* themeBtn */}
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card */}
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
