import React from 'react'
import { useState } from 'react'
import Main from './components/Main.jsx'
import Die from './components/Die.jsx'
import {nanoid} from "nanoid"
import '../style.css'
import useWindowSize from './components/useWindowSize.jsx'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false)

  const { width, height } = useWindowSize()


/**
 * https://scrimba.com/learn/learnreact/tenzies-end-game-part-2-coda448ae89bf4c2861487e00
 * Challenge: Check the dice array for these winning conditions:
 * 1. All dice are held, and
 * 2. all dice have the same value
 * 
 * If both conditions are true, set `tenzies` to true and log
 * "You won!" to the console
 */
  React.useEffect(() => {
//  const allHeld = dice.every(die => die.isHeld === true)
    const allHeld = dice.every(die => die.isHeld)
    const firstvalue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstvalue)

    

    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("You won!")
    }

    

  }, [dice])

  


  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
  }
  
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie())
    }
    return newDice
  }
  
 /**
 * Challenge: Allow the user to play a new game when the
 * button is clicked and they've already won
 */ 
  function rollDice() {
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => {
          return die.isHeld ? 
              die :
              generateNewDie()
      }))

    } else {
      setTenzies(false)   
 //   setDice(oldDice => oldDice.map(die => generateNewDie()))
      setDice(allNewDice())          
    }
  }



  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => (die.id === id) ? {...die, isHeld: !die.isHeld} : die))
    console.log(id)
  }


  const diceElements = dice.map(die => (
    <Die 
      key={die.id}
      isHeld={die.isHeld}
      value={die.value}
      holdDice={() => holdDice(die.id)}
    />
  ))


  return (
    
    <main> 
      {tenzies && <Confetti />}
      <div className="main--field">
        <h1 className='main--title'>Tenzies</h1>
        <p className='main--text'>Roll untill all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='dice-container'>

          {diceElements}
          
        </div>       
      </div>

      <button className='roll-dice' onClick={rollDice}>{tenzies ? "New Game"  : "Roll"}</button>

    
  
   {/* {tenzies && <Confetti
      width={width}
      height={height}
    />  } */}
    {tenzies && <Confetti />}
      
    </main>
  )
}



export default App

// https://github.com/alampros/react-confetti#readme
// npm install react-confetti
// import useWindowSize from 'react-use/lib/useWindowSize'
// import Confetti from 'react-confetti'
