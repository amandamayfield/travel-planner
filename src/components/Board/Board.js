import React from 'react';
import TripCard from '../Trip/TripCard/TripCard';
import './Board.scss';

const Board = (props) => {
	return (
		<div className="board">
			<TripCard />
		</div>
	);
};

export default Board;
