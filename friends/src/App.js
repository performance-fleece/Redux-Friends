import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import friendsPage from './components/friendsPage';

function App() {
	return (
		<Router>
			<div className="App">
				<div className="nav-bar">
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/friends">Friends</Link>
					</li>
				</div>
				<Route path="/login" component={Login} />
				<PrivateRoute exact path="/friends" component={friendsPage} />
			</div>
		</Router>
	);
}

export default App;
