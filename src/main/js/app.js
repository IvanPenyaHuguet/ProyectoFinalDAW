const React = require('react'); 
const ReactDOM = require('react-dom');
import { BrowserRouter } from "react-router-dom";
import Router  from "./Router";
import Index from "./Index";
import Login from "./pages/user/Login";

function App () { 
	return (
		<div className="AppContainer">
			<Login />
			<Router />
		</div>		          
	)
	
}
ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>),
	document.getElementById('react')
)