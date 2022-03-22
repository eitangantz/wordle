import React from 'react'
import Cell from './Cell'


function Row(props) {

  return (
    <div>
        <Cell pos={[props.index,0]}>cell</Cell>
        <Cell pos={[props.index,1]}>cell</Cell>
        <Cell pos={[props.index,2]}>cell</Cell>
        <Cell pos={[props.index,3]}>cell</Cell>
        <Cell pos={[props.index,4]}>cell</Cell>
    </div>
  )
}

export default Row