import React from 'react';
const ReactDOM = require('react-dom');
import { BrowserRouter } from "react-router-dom";
import Router  from "./Router";
import Index from "./Index";
import Login from "./pages/user/Login";
import AuthContextProvider from './context/AuthContextProvider';




function App ({Component, pageProps}) {	
	return (
		<AuthContextProvider>
			<BrowserRouter>
				<div className="AppContainer">
					<Login />
					<Router />
				</div>
			</BrowserRouter>
		</AuthContextProvider>				          
	)	
}

ReactDOM.render(<App />,
	document.getElementById('react')
)