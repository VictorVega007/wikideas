import { ThemeProvider } from "@emotion/react";
import { theme } from "./themes/theme";
import { Home } from "./pages/home/Home";
import { Tema } from "./components/Articulo/Tema"

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/*<Home />*/}
      
      <Tema />
      
      
      
    </ThemeProvider>
  );
}

export default App;
