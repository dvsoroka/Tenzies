import React from 'react'
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
//import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Die from './components/Die.jsx'
import {nanoid} from "nanoid"
import '../style.css'

/**
 * Challenge #1:
 * 
 * - Create a Die component that takes a `value` prop
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components 
 *   to look like they do in the slide
 *      - Hints: Create a container to hold the 10 instances
 *        of the Die component, and use CSS Grid to lay them
 *        out evenly in 2 rows of 5 columns
 *      - Use flexbox on main to center the dice container
 *        in the center of the page
 */

  /**
  * Challenge #2:
  * 
  * Write a function (allNewDice) that returns an array 
  * of 10 random numbers between 1-6 inclusive.
  * 
  * Log the array of numbers to the console for now
  */
    /**
    * Challenge #3:
    * https://scrimba.com/learn/learnreact/tenzies-generate-array-of-10-random-numbers-cod40451b92865f80528ed9e7
    * Write a function (allNewDice) that returns an array 
    * of 10 random numbers between 1-6 inclusive.
    * 
    * Log the array of numbers to the console for now
    */
      /**
       * Challenge #4:
       * 
       * Create state to hold our array of numbers. (Initialize
       * the state by calling our `allNewDice` function so it 
       * loads all new dice as soon as the app loads)
       * 
       * Map over the state numbers array to generate our array
       * of Die elements and render those in place of our
       * manually-written 10 Die elements.
       */
        /**
        * Challenge #5: Update the array of numbers in state to be
        * an array of objects instead. Each object should look like:
        * { value: <random number>, isHeld: false }
        * 
        * Making this change will break parts of our code, so make
        * sure to update things so we're back to a working state
        */
          /**
          * Challenge #6: Add conditional styling to the Die component
          * so that if it's held (isHeld === true), its background color
          * changes to a light green (#59E391)
          * 
          * Remember: currently the Die component has no way of knowing
          * if it's "held" or not.
          */
  

function App() {

  const [dice, setDice] = React.useState(allNewDice());

  console.log(dice)

  function allNewDice() {
     // new array to hold my numbers
     // loop 10 times
         // push a random number from 1-6 to my array
     // return array
    const newDice = []
    for (let i = 0; i < 10; i++) {
//#5  newDice.push(Math.ceil(Math.random() * 6))
      newDice.push({
        value: Math.ceil(Math.random() * 6), 
        isHeld: true,
        id: nanoid() 
      })
    }
    
    return newDice
  }

  function toggle(id) {
    setDice(prevDice => prevDice.map(die => (die.id === id) ? {...die, isHeld: !die.isHeld} : die))
  }
// const diceElements = dice.map(die =>  <Die key={die.id} value={die.value}  /> )  //  instead of <Die value={die} />
  const diceElements = dice.map(die => (
    <Die 
      key={die.id}
      isHeld={die.isHeld}
      value={die.value}
      toggle={() => toggle(die.id)}
      
    />
  ))

  function rollDice() {
    setDice(allNewDice())
  }


  return (
    
    <main> 
      <div className="main--field">
        <h1 className='main--title'>Tenzies</h1>
        <p className='main--text'>Roll untill all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='dice-container'>

          {diceElements}
          
        </div>       
      </div>

      <button className='roll-dice' onClick={rollDice}>Roll</button>
      
    </main>
  )
}



export default App
