import React from 'react';
const ReactDOM = require('react-dom');
import { HashRouter } from "react-router-dom";
import Router  from "./Router";
import './i18n';
import AuthContextProvider from './context/AuthContextProvider';
import MUITheme from './lib/conf/GlobalMUIConf';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DayJSUtils from '@date-io/dayjs';


function App ({Component, pageProps}) {
	return (
		<AuthContextProvider>
			<MUITheme>
				<MuiPickersUtilsProvider utils={DayJSUtils} locale={"es"}>
					<HashRouter>
						<div className="AppContainer">					
							<Router />
						</div>
					</HashRouter>
				</MuiPickersUtilsProvider>
			</MUITheme>
		</AuthContextProvider>				          
	)	
}

ReactDOM.render(<App />,
	document.getElementById('react')
)