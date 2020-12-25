import React from 'react';
import styles from './panel.module.css';

function Panel(props) {
    return (
        <div className={`atom-panel`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <div className={`atom-panel-head ${props.type ? props.type : ''}`}>{props.headline}</div>
                    </div>

                    <div className="col-xs-12">
                        <div className="atom-panel-body">{props.children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panel;
