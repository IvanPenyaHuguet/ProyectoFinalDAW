const React = require('react'); 
const ReactDOM = require('react-dom');


class App extends React.Component { 

	constructor(props) {
		super(props);
	// 	this.state = {employees: []};
	}

	// componentDidMount() {
	// 	client({method: 'GET', path: '/api/employees'}).done(response => {
	// 		this.setState({employees: response.entity._embedded.employees});
	// 	});
	// }

	render() { 
		return (
            <>
			<h1>Hello world Andrea e Ivan  </h1>
            <h2>This is react</h2>
            </>
		)
	}
}
ReactDOM.render(
	<App />,
	document.getElementById('react')
)