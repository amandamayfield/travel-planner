import React, { Component } from 'react';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<Board />
			</div>
		);
	}
}

export default App;
