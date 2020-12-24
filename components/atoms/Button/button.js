import React from 'react';
import './button.css';

function Button(props) {
	return (
		<a
			className={`atom-button-${props.size === -1 ? 'extra-small' : props.size === 0 ? 'small' : 'large'}-${
				props.color ? props.color : 'orangered'
			} ${props.className ? props.className : ''} ${props.disabled ? 'disabled' : ''}`}
			href={props.url ? props.url : '#'}
			onClick={props.handleClick}
		>
			{props.name}
		</a>
	);
}

export default Button;
