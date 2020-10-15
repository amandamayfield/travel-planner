import React from 'react';
import Button from '../UI/Button/Button';
import './Header.scss';

const Header = (props) => {
	return (
		<div className="header">
			<div className="header-title">
				<h1>Travel Planner</h1>
			</div>
			<div className="header-button">
				<Button>Add a trip</Button>
			</div>
		</div>
	);
};

export default Header;
