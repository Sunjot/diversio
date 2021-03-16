import React, { useState } from 'react';
import ColorSelector from './ColorSelector';
import ColorWindow from './ColorWindow';
import './index.css';

const ColorWidget = (props) => {

    const { colorList } = props;
    const [selectedColor, setSelectedColor] = useState('#D7CEE4');

    return (
        <div className="color-widget">
            <div className="color-widget-title">
                <h2>Color Picker Widget</h2>
            </div>
            <div id="window-selector-wrapper">
                <ColorWindow selectedColor={selectedColor} />
                <ColorSelector colorList={colorList} selectColor={() => setSelectedColor(colorCode)} selectedColor={selectedColor}/>
            </div>
        </div> 
    );
}

export default ColorWidget;
