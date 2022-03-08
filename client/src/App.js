import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavContext from './utils/NavContext';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Event from './pages/Event';

function App() {
	const [page, setPage] = useState('Home');

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	return (
		<div>
			<NavContext.Provider value={handlePageChange}>
				<Router>
					<NavBar currentPage={'derp'} />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/home'>
							<Home />
						</Route>
						<Route exact path='/about'>
							<About />
						</Route>
						<Route exact path='/schedule'>
							<Schedule />
						</Route>
						<Route exact path='/event'>
							<Event />
						</Route>
						<Route exact path='*' component={Home} />
					</Switch>
				</Router>
			</NavContext.Provider>
		</div>
	);
}

export default App;
