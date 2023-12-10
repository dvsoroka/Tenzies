import React from 'react'
import { useState } from 'react'
import Main from './components/Main.jsx'
import Die from './components/Die.jsx'
import {nanoid} from "nanoid"
import '../style.css'

function App() {

  const [dice, setDice] = React.useState(allNewDice());

  const [tenzies, setTenzies] = React.useState(false)


  React.useEffect(() =>{
    tenzies && console.log("You won!")
  }, [tenzies])

  console.log(`tenzies: ${tenzies}`)
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
    // const checkArr = []
    // for (let i = 0; i < dice.length; i++) {
    //   if (dice[i].isHeld === true) {
    //     let valueToCheck = dice[i].value
    //     checkArr.push(valueToCheck)
    //   }
    // }
    // console.log(checkArr.reduce)
    // let dis = dice.reduce(function (previousElement, previousElement) {
    //   return previousElement.value + currentElement.value
    // })


//  console.log(dice.map(die => die.isHeld ? die.value : ""))
// console.log(dice
//   .filter(element => element.isHeld === true)
//   .reduce((accumulator, currentValue, currintIndex, arr) => {
//     let result = (accumulator + currentValue.value)/currentValue.value
//     console.log(`currentValue: ${currentValue.value}`)
//     console.log(`accumulator: ${accumulator}`)
//     console.log(`result: ${result}`)
//     return result
  
//   }, 0)
// )
    let selectedArr = []
    let refValues = dice.map(die => die.value).filter(element => element.isHeld === true)
//    refValues = dice.map(die => die.value && die.isHeld)
    var refValue
    for (let i = 0; i < dice.length; i++) {
      let currentElement = dice[i]
      if (currentElement.isHeld === true) {
        
        if (refValues.length > 0) {
          let prevRefValue = refValues.pop()
          refValues.push(prevRefValue)
          while (prevRefValue !== currentElement.value) {
             alert("You marked dices with different values!")
             break
           }
           refValues.push(currentElement.value)
           if (refValues.length > 9) {
            refValue = refValues.pop()
            refValues.push(refValue)

 //           refValues.forEach(element => )
            console.log("Congratulations, you've won and all dices have the same numbers !")
              break

            // if (refValues.forEach(element => (element === refValue ))) {
            //   console.log("Congratulations, you've won and all dices have the same numbers !")
            //   break
            // }
            
            // } else {
            //   console.log("please, check wheather you mark different values?")
            // }

          }  
        } else {
          console.log("New!", refValues.length)
          refValues.push(currentElement.value) 
          // if (refValues.length > 9) {
          //   console.log("Congratulations, you've won!")
          //   break
          // } 

        }

      }
      
    }
  //  console.log(`refValues: ${refValues}`)
    console.log("refValues:   ", refValues)

    console.log(dice)
    // let dis = [0, 1, 2, 3, 4].reduce(function (previousElement, currentElement, index, array) {
    //   return previousElement + currentElement;
    // });
    // console.log(dis)
    console.log("Dice state changed")
    

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
  
  
  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
            die :
            generateNewDie()
    }))
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
