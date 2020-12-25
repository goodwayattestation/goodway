import React from 'react';
import styles from './button.module.css';

function Button(props) {
	return (
		<a
			className={`${
				styles[
					`atom-button-${
						props.size === -1
							? 'extra-small'
							: props.size === 0
							? 'small'
							: 'large'
					}-${props.color ? props.color : 'orangered'}`
				]
			} ${props.disabled ? 'disabled' : ''} ${
				props.className ? props.className : ''
			}`}
			href={props.url ? props.url : '#'}
			onClick={props.handleClick}
		>
			{props.name}
		</a>
	);
}

export default Button;
