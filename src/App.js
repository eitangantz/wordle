import React, { useEffect } from 'react'
import './App.css';
import Grid from './components/Grid.js';
import { useState } from 'react';
import {words} from './words'

export const appContext = React.createContext()

function App() {
  const [grid, setGrid] = useState([["","","","",""],
                                    ["","","","",""],
                                    ["","","","",""],
                                    ["","","","",""],
                                    ["","","","",""],
                                    ["","","","",""]])
  const [currRow, setcurrRow] = useState(0)
  const [currCol, setCurrCol] = useState(0)
  const [sol, setSol] = useState("eitan")
  
  const generateRandomWord = () => {
    let index = Math.floor(Math.random() * words.length);
    return words[index]
  }
  const initGame = ()=>{
    setGrid([["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]])
    setcurrRow(0)
    setCurrCol(0)
    let newWord = generateRandomWord()
    setSol(newWord)
  }
  useEffect(()=>{
    if (parseInt(currCol) === 0 && parseInt(currRow) > 0) {
      let solve = true
      for(let i=0;i<5;i++) {
          if (grid[currRow-1][i].toLocaleLowerCase() !== sol[i].toLocaleLowerCase()) {
              solve = false
          }
      }
      if (solve) {
         alert("you won")
         initGame()

      } else if (parseInt(currCol) === 0 && parseInt(currRow) === 6) {
        alert(`you lost the secret was ${sol}`)
        initGame()
      }
    }
  })

  return (
    <div className='App'> 
      <appContext.Provider
      value={{grid: [grid,setGrid], currRow: [currRow,setcurrRow],
      currCol: [currCol,setCurrCol], solution: [sol,setSol]}}>
        <h1>wordle</h1>
        <Grid></Grid>
      </appContext.Provider>
    </div>
  )
}

export default App
