
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 0, 0, 0.0)",
    },
    secondary: {
      main: "#1836B2"
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

    MuiButton: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: "#c8d0ef",
            color: "#3c55b0"
          }
        }
      }
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: "#c8d0ef",
            color: "#3c55b0"
          }
        }
      }
    },
  },
})