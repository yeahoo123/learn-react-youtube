import React, { useState } from 'react';
import './ColorBox.scss'
const getRandomColor = () => {
    const colorList = ["green", "black", "yellow", "blue", "deeppink"]
    const randomIndex  = Math.trunc(Math.random()*5)
    return colorList[randomIndex]
}

function ColorBox() {
    const [color, setColor] = useState(()=>{
            const initColor = localStorage.getItem("box_color") || "deeppink"
            return initColor
        }
    )
    const handleBoxClick = () => {
        const newColor = getRandomColor()
        setColor(newColor)
        //save varible to localstorage
        localStorage.setItem("box_color", newColor)
    }
    return (
        <div className="color-box" style={{backgroundColor: color}} onClick={handleBoxClick}> 

        </div>
    );
}

export default ColorBox;