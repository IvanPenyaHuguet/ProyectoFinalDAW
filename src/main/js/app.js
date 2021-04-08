import React from 'react';
const ReactDOM = require('react-dom');
import { HashRouter } from "react-router-dom";
import Router  from "./Router";
import './i18n';
import AuthContextProvider from './context/AuthContextProvider';






function App ({Component, pageProps}) {	
	return (
		<AuthContextProvider>					
				<HashRouter>
					<div className="AppContainer">					
						<Router />
					</div>
				</HashRouter>			
		</AuthContextProvider>				          
	)	
}

ReactDOM.render(<App />,
	document.getElementById('react')
)