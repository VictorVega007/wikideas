import Background from "../../assets/img2.jpg";
import { HomeTitle } from "../HomeTitle/HomeTitle"
import { NavBar } from "../NavBar/NavBar";
import "./Banner.css";
import { SearchInput } from "../SearchInput/SearchInput";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 0, 0, 0.0)",
    },
    secondary: {
      main: "#fabb08"
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 132, 255, 0.25)",
        }
      }
    },
  }
})

export const Banner = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        height: '700px',
        backgroundSize: 'cover'
        }} className="containeImg">
          <NavBar />
          <HomeTitle />
          <div className="searchInputContainer">
            <SearchInput />
          </div>
          
      </div>
      </ThemeProvider>
  )
}
