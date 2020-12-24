import React from 'react';
import Button from '../../atoms/Button/button.js';
import './editorial.css';

function Editorial(props) {

    let side = props.side?props.side:"left";
    let headlinePosition = props.headlinePosition?props.headlinePosition:"left";
    let buttonPosition = props.buttonPosition?props.buttonPosition:"center";
    let headlinePositionClass = "t-a:l";
    let buttonPositionClass = "t-a:c";
    let headlineSize = "3";

    headlineSize = props.headlineSize?props.headlineSize:headlineSize;

    if (headlinePosition === "right") {
        headlinePositionClass = "t-a:r";
    } else if (headlinePosition === "center") {
        headlinePositionClass = "t-a:c";
    }

    if (buttonPosition === "right") {
        buttonPositionClass = "t-a:r";
    } else if (buttonPosition === "left") {
        buttonPositionClass = "t-a:l";
    }

    return (
        <div className="organism-editorial xs-mt-12 xs-mb-12 md-mt-24 md-mb-24">
            <div className="container-fluid">
                <div className={`row ${props.verticalAlign === 'top'?'':'middle-xs'}`}>
                    <div className="col-xs-12 hidden-md-up">
                        {headlineSize === "1" && (<h1 className={`${headlinePositionClass} xs-mb-12`}>{props.headline}</h1>)}
                        {headlineSize === "2" && (<h2 className={`${headlinePositionClass} xs-mb-12`}>{props.headline}</h2>)}
                        {headlineSize === "3" && (<h3 className={`${headlinePositionClass} xs-mb-12`}>{props.headline}</h3>)}
                    </div>

                    <div className={`col-xs-12 col-md-6 ${side==='right'?'end-xs':'start-xs'}`}>
                        <img className="organism-editorial-image" src={props.img} alt="editorial-image" />
                    </div>

                    <div className={`col-xs-12 col-md-6 ${side==='right'?'first-md':''}`}>
                        {headlineSize === "1" && (<h1 className={`hidden-sm-down ${headlinePositionClass}`}>{props.headline}</h1>)}
                        {headlineSize === "2" && (<h2 className={`hidden-sm-down ${headlinePositionClass}`}>{props.headline}</h2>)}
                        {headlineSize === "3" && (<h3 className={`hidden-sm-down ${headlinePositionClass}`}>{props.headline}</h3>)}

                        <div className="t-a:l xs-mt-12 md-mt-24 organism-editorial-body">
                            {props.children}
                        </div>

                        <div className={`xs-mt-12 md-mt-24 ${buttonPositionClass}`}>
                            {props.btnLink && <Button url={props.btnLink} color="dodgerblue" name={props.btnText} size={1}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editorial;
