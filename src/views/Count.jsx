//rafce

import React from 'react'
import {useState} from 'react'

const Count = ({name}) => {

  const [count, setCount] = useState(0) // actualizar en pantalla con función setCount del hook
  const suma = () => {
    setCount(count + 1);
  }
  const resta = () => {
    setCount(count - 1);
  }

  return (
    <>
        <h1>Hola {name}, contador: {count}</h1>
        <button onClick = {suma}>Suma</button>
        <button onClick = {resta}>Resta</button>
    </>
  )
}

export default Count