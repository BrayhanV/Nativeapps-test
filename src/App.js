import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { darkTheme } from "./theme";
import { Home } from "./containers/Home";

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Home />
		</ThemeProvider>
	);
}

export default App;
