import { ThemeProvider } from "@emotion/react";
import { theme } from "./themes/theme";
import { Home } from "./pages/home/Home";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Category } from "./pages/category/Category";

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      

      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Category />} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
