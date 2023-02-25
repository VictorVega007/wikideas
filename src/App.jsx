import "./App.css";
import "./index.css";
import { Banner } from "./components/Banner/Banner";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <div className="App-header">
        <Banner />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
