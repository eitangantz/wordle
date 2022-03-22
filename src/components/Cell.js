import React, { useState, useContext, useEffect, useRef } from 'react'
import {appContext } from '../App.js'

function Cell(props) {
  const  [x_pos, y_pos] = props.pos
  const {grid, currRow, currCol, solution} = useContext(appContext);
  const [gridval, setGrid] = grid 
  const [currRowval, setRow] = currRow 
  const [currColval, setCol] = currCol
  const [sol,setSol] = solution
  const [dis,setDis] = useState(false)
  const inputElement = useRef(null)
  const [state,setState] = useState("wrong")
  
  useEffect(() => {
    if (currRowval == x_pos && currColval == y_pos) {
      inputElement.current.focus();
    }

    if (currColval == 0 && currRowval-1 === parseInt(x_pos)) {
        if (sol[y_pos].toLocaleLowerCase() === gridval[x_pos][y_pos].toLocaleLowerCase()) {
            setState("right")
            
        } else {
        for(let i=0;i<5;i++) {
            if (gridval[x_pos][y_pos].toLocaleLowerCase() === sol[i].toLocaleLowerCase()) {
                setState("almost")
            }
        }
    }

    }
    if (gridval[0][0] == "") {
        setState("wrong")
    }
  }, );
  const handleKeyDown = (event) => {
        if (event.key == "Backspace") {
            if (currColval <= 0 && currRowval >= 0) {
                let newGrid = [...gridval]
                newGrid[x_pos][y_pos] = ""
                setGrid(newGrid)        
                return;                
            } else {
                setCol((currColval-1)%5)
                let newGrid = [...gridval]
                newGrid[x_pos][y_pos] = ""
                setGrid(newGrid)    
            }
        } else if (event.target.value.length > 1) {
            setCol((currColval+1)%5)
            if (currColval == 4) {
                setRow(currRowval+1)
            }    
        }
        
  }
  const handleOnClick = () => {
      setDis(true)
      setRow(currRowval)
      setCol(currColval)
      setDis(false)
  }
  const handleOnChange = (event) => {
      let val = event.target.value 
    if (currRowval == x_pos && currColval == y_pos && val.length === 1) {
        let newGrid = [...gridval]
        newGrid[x_pos][y_pos] = val 
        setCol((currColval+1)%5)
        if (currColval == 4) {
            setRow(currRowval+1)
        }
        setGrid(newGrid)
    }
    if (val.length > 1) {
        let newGrid = [...gridval]
        newGrid[x_pos][y_pos] = val[-1]   
        
    }
  }

  return (
        <input disabled={dis} className={state} onClick={handleOnClick} ref={inputElement} type="text" value={gridval[x_pos][y_pos]}  onChange={(event)=> handleOnChange(event)} onKeyDown={(event)=>(handleKeyDown(event))}/>
    )
}

export default Cell