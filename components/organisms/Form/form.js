import React, { useState, useEffect } from 'react';
import './form.css';

function Form(props) {
    return (
        <div className="organism-form">
            {props.children}
        </div>
    );
}

export default Form;