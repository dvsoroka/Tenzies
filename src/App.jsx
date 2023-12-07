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
            /**
            * Challenge #7: Create a function `holdDice` that takes
            * `id` as a parameter. For now, just have the function
            * console.log(id).
            * 
            * Then, figure out how to pass that function down to each
            * instance of the Die component so when each one is clicked,
            * it logs its own unique ID property. (Hint: there's more
            * than one way to make that work, so just choose whichever
            * you want)
            * 
            */


function App() {

  const [dice, setDice] = React.useState(allNewDice());

//#8refactoring  function allNewDice() {
//#8refactoring     // new array to hold my numbers
//#8refactoring     // loop 10 times
//#8refactoring         // push a random number from 1-6 to my array
//#8refactoring     // return array
//#8refactoring    const newDice = []
//#8refactoring    for (let i = 0; i < 10; i++) {
//#8refactoring//#5  newDice.push(Math.ceil(Math.random() * 6))
//#8refactoring      newDice.push({
//#8refactoring        value: Math.ceil(Math.random() * 6), 
//#8refactoring        isHeld: false,
//#8refactoring        id: nanoid() 
//#8refactoring      })
//#8refactoring    }
//#8refactoring    
//#8refactoring    return newDice
//#8refactoring  }

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
              * Challenge #8: Update the `rollDice` function to not just roll
              * all new dice, but instead to look through the existing dice
              * to NOT role any that are being `held`.
              * 
              * Hint: this will look relatively similiar to the `holdDice`
              * function below. When creating new dice, remember to use
              * `id: nanoid()` so any new dice have an `id` as well.
              */

//#8refactoring  function rollDice() {
//#8refactoring    setDice(prevDice => prevDice.map(
//#8refactoring      die => (die.isHeld !== true ? {...die, value: Math.ceil(Math.random() * 6)} : die)))
//#8refactoring
//#8refactoring  }
function rollDice() {
  setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? 
          die :
          generateNewDie()
  }))
}


  function toggle(id) {
    setDice(prevDice => prevDice.map(die => (die.id === id) ? {...die, isHeld: !die.isHeld} : die))
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => (die.id === id) ? {...die, isHeld: !die.isHeld} : die))
    console.log(id)
  }


// const diceElements = dice.map(die =>  <Die key={die.id} value={die.value}  /> )  //  instead of <Die value={die} />
  const diceElements = dice.map(die => (
    <Die 
      key={die.id}
      isHeld={die.isHeld}
      value={die.value}
      holdDice={() => holdDice(die.id)}
//#7  toggle={() => toggle(die.id)}           //Working!
    />
  ))


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
