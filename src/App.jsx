import { ThemeProvider } from "@emotion/react";
import { theme } from "./themes/theme";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
