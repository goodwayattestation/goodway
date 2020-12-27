import React from 'react';
import Button from '../Button/button';
import styles from './card.module.css';

function Card(props) {
    return (
        <div
            itemScope
            itemType="https://gw.srishamanth.com/Card"
            className={`${styles['atom-card']} xs-mt-12 xs-mb-12 md-mt-24 md-mt-24`}
        >
            <div
                className={`${props.url ? '' : 'none'}`}
                onClick={() => {
                    location.href = props.url;
                }}
            >
                <div className={styles['atom-card-image']}>
                    <img itemProp="cardImage" src={`${props.img}`} alt="card-image" />
                    <div
                        itemProp="cardContent"
                        itemScope
                        itemType="https://gw.srishamanth.com/CardContent"
                        className={styles['atom-card-image-float']}
                    >
                        <h3 itemProp="Headline">{props.headline}</h3>
                        {props.additionalInfo && <p itemProp="AdditionalInfo">{props.additionalInfo}</p>}
                        {props.buttonText && (
                            <Button
                                itemProp="Button"
                                size={-1}
                                name={props.buttonText}
                                url={props.buttonUrl}
                                color="dodgerblue"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
