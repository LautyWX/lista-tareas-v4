import React from 'react'
import './styles.scss'

function Text({setTextInput}) {

  return (
    <input 
      type="text"
      onChange={(event) => {setTextInput(event.target.value)}}
      className="input-text" 
      ></input>
  )
}

export default Text
