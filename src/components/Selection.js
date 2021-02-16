import React from 'react';
import "../styles/Child.css"

const Selection = (props) => {

    return (
        <div id={props.key} onClick={props.applyColor} className="fix-box">
            <h2 className="subheading">Selection </h2>
        </div>
    );
};

export default Selection;
