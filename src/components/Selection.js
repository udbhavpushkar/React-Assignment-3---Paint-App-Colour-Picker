import React, {useState} from 'react';
import "../styles/Child.css"

const Selection = ({applyColor}) => {
    const [currentColor, setCurrentColor] = useState({"background": ""});

    const updateSelectionStyle = (nextBackground)=>{
        setCurrentColor({"background": nextBackground.background});
    }

    return (
        <div style={currentColor} className="fix-box" onClick={()=>applyColor(updateSelectionStyle)}>
            <h2 className="subheading">Selection </h2>
        </div>
    );
};

export default Selection;
