import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './Components/Menu';
import Calculator from './Components/Calculator';

function App() {
	return (
		<div className="App">
			<Router>
				<Menu />
				<Switch>
					<Route path="/" exact>
						{/* <Dashboard /> */}
					</Route>
					<Route path="/calculator">
						<Calculator />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
