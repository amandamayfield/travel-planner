import React from 'react';
import './TripCard.scss';
import sampleImage from '../../../assets/sample.jpg';

const TripCard = (props) => {
	return (
		<div className="trip-card">
			<div className="trip-card__photo">
				<img className="trip-card__photo-image" src={sampleImage} alt="sample" />
			</div>
			<div className="trip-card__info">
				<div className="trip-card__info-name">
					<h3>{props.tripName}</h3>
				</div>
				<div className="trip-card__info-place">{props.tripPlace}</div>
			</div>
		</div>
	);
};

export default TripCard;
