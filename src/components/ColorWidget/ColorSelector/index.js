import React from 'react';
import './index.css';

const ColorSelector = ({colorList, selectColor, selectedColor}) => {
    return (
        <div className="color-selector-wrapper">
            {colorList.map((colorCode, i) => {
                return(
                    <div 
                        key={i}
                        style={{backgroundColor: colorCode}}
                        className={selectedColor === colorCode? "color-selector-option active" : "color-selector-option"}
                        onClick={() => selectColor(colorCode)}
                    />
                )
            })}
        </div>
    );
}

export default ColorSelector;
