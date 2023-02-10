import logo from "./logo.svg";
import "./App.css";
import { Typography } from "@mui/material";
import { NavBar } from "./components/NavBar/NavBar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar color="navbar-color"/>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h5">
          Edit <code>src/App.js</code> and save to reload.
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Typography>
      </header>
    </div>
  );
}

export default App;
