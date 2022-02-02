import React from "react"
//import React, { useState } from "react"

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const History = (props) => {
  if (props.arr.length === 0) {
    return (
    <h1>Press the left or right button</h1>
    )
  }
  return (
    <p>{props.arr.join(' + ')}</p>
  )
} 

const Display = (props) => <h1>{props.value}</h1>

const App = () => {


  const [left, setLeft] = React.useState(0)
  const [right, setRight] = React.useState(0)
  const [allClicks, setAll] = React.useState([])

  const addLeft = () => {
    setAll(allClicks.concat('L')) 
    setLeft(left + 1)
  }

  const addRight = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const setToZero = () => {
    setLeft(0)
    setRight(0)
    setAll([])
  }

  const setLValue = (val) => () => setLeft(val)


  return (
    <>
      <Display value={left} />
      <Display value={right} />
      <Button onClick={addLeft} text={'Left click'} />
      <Button onClick={addRight} text={'Right click'} />
      <Button onClick={setToZero} text={'Reset'}/>
      <Button onClick={setLValue(1000)} text={'Set to 1000'} />
      <History arr={allClicks} />
    </>
  )
}

export default App