import React from "react" 
import { useState } from 'react'

import boxes from "./boxes"
import Box from "./Box"

export default function Die(props) {
    const [squares, setsquares] = React.useState(boxes)
//    console.log(props)

    return (
        <div className="die-face">
            <h2 className="die-num">{props.value}</h2>
        </div>                    
    )
}