import React from 'react';
import styles from './loader.module.css';

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
