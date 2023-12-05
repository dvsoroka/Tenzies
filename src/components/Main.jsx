import React from "react" 
import { useState } from 'react'

import boxes from "./boxes"
import Box from "./Box"

export default function Main(props) {
    const [squares, setsquares] = React.useState(boxes)
   const idArray = squares.slice()
   const idArray1 = idArray.filter(element => element.on !== true )

    function toggle(id) {
        console.log(id)
        setsquares(prevSquares => { 
            return prevSquares.map(square => square.id === id ? {...square, on:  !square.on} : square )
        })
    }

    function roll(e) {
        console.log(idArray1)
        const newArray = []
        for (let i = 0; i < idArray1.length; i++) {
            const newElement = {...idArray1[i], num: Math.floor(1 + 6 * Math.random())}
            newArray.push(newElement)
        }
        console.log(newArray)
        return newArray
    }
    

    const squareElements = squares.map(square => (
        <Box 
            key={square.id}
            id={square.id}
            on={square.on}
            toggle={toggle}
            num={!square.on && Math.floor(1 + 6 * Math.random()) || square.id} 
        />
    ))

    return (
        <main>
            <div className="main--field">
                <h1 className='main--title'>Tenzies</h1>
                <p className='main--text'>Roll untill all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className='boxes--field'>
                {squareElements}
                </div>
            {/*  */}
            </div>
            <button onClick={roll}>Roll</button>
        </main>
    )
}