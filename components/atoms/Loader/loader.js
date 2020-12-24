import React from 'react';
import './loader.css';

const Loader = (props) => {
	if (props.show) {
		document.body.style = 'overflow:hidden;';
	} else {
		document.body.style = 'overflow:initial;';
	}

	return (
		<div className={`loaderContainer ${props.show ? 'show' : ''}`}>
			<div class="loader" />
			{props.message ? <div class="loaderMessage">{props.message}</div> : <></>}
		</div>
	);
};

export default Loader;
