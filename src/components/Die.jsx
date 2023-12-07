import React from "react" 
import { useState } from 'react'

import boxes from "./boxes"
import Box from "./Box"

export default function Die(props) {
    const [squares, setsquares] = React.useState(boxes)
//    console.log(props)
const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
}

    return (
        <div 
            className="die-face" 
            style={styles} 
 //#7       onClick={props.toggle}              // Working!
 //         onClick={() => {props.toggle(props.id)}}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>                    
    )
}