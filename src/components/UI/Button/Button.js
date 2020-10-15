import React from 'react';
import './Button.scss';

const Button = (props) => {
	return (
		<button className="button" onClick={props.clicked}>
			{props.children}
		</button>
	);
};

export default Button;
