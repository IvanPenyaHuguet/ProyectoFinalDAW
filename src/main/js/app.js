import React from 'react';
const ReactDOM = require('react-dom');
import { HashRouter } from "react-router-dom";
import Router  from "./Router";
import './i18n';
import AuthContextProvider from './context/AuthContextProvider';
import MUITheme from './lib/conf/GlobalMUIConf';


function App ({Component, pageProps}) {
	return (
		<AuthContextProvider>
			<MUITheme>					
				<HashRouter>
					<div className="AppContainer">					
						<Router />
					</div>
				</HashRouter>
			</MUITheme>
		</AuthContextProvider>				          
	)	
}

ReactDOM.render(<App />,
	document.getElementById('react')
)