import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';

class App extends Component {
render() {
	return (
			<Router>
				<div className="App">
				<Routes>
				<Route exact path='/' element={< LandingPage />}></Route>
				<Route exact path='/cariMobil' element={< SearchPage  />}></Route>
				</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
