import React from 'react';
import TripCard from '../Trip/TripCard/TripCard';
import './Board.scss';

const Board = (props) => {
	const tripCards = props.trips.map((tripCard) => {
		return (
			<div className="card-container" key={tripCard.key}>
				<TripCard click={props.click} tripName={tripCard.name} tripPlace={tripCard.place} id={tripCard.key} />
			</div>
		);
	});

	return <div className="board">{tripCards}</div>;
};

export default Board;
