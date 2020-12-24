import React from 'react';
import Button from '../Button/button.js';
import './card.css';

function Card(props) {
    return (
        <div itemscope itemtype="https://gw.srishamanth.com/Card" className="atom-card xs-mt-12 xs-mb-12 md-mt-24 md-mt-24">
            <a href={props.url} className={`${props.url?'':'none'}`}>
                <div className="atom-card-image">
                    <img itemProp="cardImage" src={`${props.img}`} alt="card-image" />
                    <div itemProp="cardContent" itemScope itemType="https://gw.srishamanth.com/CardContent" className="atom-card-image-float">
                        <h3 itemProp="Headline" >{props.headline}</h3>
                        {props.additionalInfo && <p itemProp="AdditionalInfo">{props.additionalInfo}</p>}
                        {props.buttonText && <Button itemProp="Button" size={-1} name={props.buttonText} url={props.buttonUrl} color="dodgerblue"/> }
                    </div>
                </div>
            </a>
        </div> 
    );
}

export default Card;
