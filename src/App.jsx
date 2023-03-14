import { ThemeProvider } from "@emotion/react";
import { theme } from "./themes/theme";
import { Home } from "./pages/home/Home";
import { Tema } from "./components/Articulo/Tema"
import { List } from "./components/Articulo/EnsayoTexto"

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/*<Home />*/}
      {/*<List></List>*/}
      
      <Tema />
      
      
      
      
    </ThemeProvider>
  );
}

export default App;
