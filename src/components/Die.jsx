import React from "react" 
import { useState } from 'react'

import boxes from "./boxes"
import Box from "./Box"

export default function Die(props) {
    const [squares, setsquares] = React.useState(boxes)
//    console.log(props)
const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "transparent"
}

    return (
        <div 
            className="die-face" 
            style={styles} 
            onClick={props.toggle}
 //         onClick={() => {props.toggle(props.id)}}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>                    
    )
}