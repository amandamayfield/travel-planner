import React, { Component } from 'react';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import axios from './axios-db';
import './App.scss';

class App extends Component {
	state = { trips: [] };

	componentDidMount() {
		axios
			.get('https://travel-planner-7cd1d.firebaseio.com/trips.json')
			.then((response) => {
				console.log(response);
				this.setState({ trips: response.data });
			})
			.catch((error) => {
				this.setState({ error: true });
			});
	}

	addTripHandler = (trip) => {};

	render() {
		return (
			<div className="app">
				<Header />
				<Board trips={this.state.trips} />
			</div>
		);
	}
}

export default App;
