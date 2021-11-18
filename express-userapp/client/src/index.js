import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UsersContextProvider from "./store/UsersContext";

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<UsersContextProvider>
				<App />
			</UsersContextProvider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById("root")
);


