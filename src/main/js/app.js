import React, { Suspense } from 'react';
const ReactDOM = require('react-dom');
import { HashRouter } from "react-router-dom";
import Router  from "./Router";
import './i18n';
import AuthContextProvider from './context/AuthContextProvider';
import LocalizationContextProvider from './context/LocalizationContext';
import ResponsiveContextProvider from './context/utils/ResponsiveContext';
import MUITheme from './lib/conf/GlobalMUIConf';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DayJSUtils from '@date-io/dayjs';
import Loader from './components/container/Loader';
import "@fontsource/quando";
import "@fontsource/alatsi";
import "@fontsource/cabin/variable.css";


function App ({Component, pageProps}) {
	return (
		<Suspense fallback={<Loader />}>
			<ResponsiveContextProvider>
				<AuthContextProvider>
					<LocalizationContextProvider>
						<MUITheme>
							<MuiPickersUtilsProvider utils={DayJSUtils} locale={"es"}>
								<HashRouter>
									<div className="AppContainer">					
										<Router />
									</div>
								</HashRouter>
							</MuiPickersUtilsProvider>
						</MUITheme>
					</LocalizationContextProvider>
				</AuthContextProvider>
			</ResponsiveContextProvider>	
		</Suspense>			          
	)	
}

ReactDOM.render(<App />,
	document.getElementById('react')
)