import React from 'react';
import './index.css';

const ColorWindow = ({selectedColor}) => {
    return (
        <div className="color-window-wrapper">
            <div style={{backgroundColor: selectedColor}} className="color-window-colorbox"/>
        </div>
    );
}

export default ColorWindow;
