import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import './App.scss';


function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
