import React from 'react'
import Button from './button/Index'
import Text from './text/Index'
import "./styles.scss"
import { useState } from 'react'
import { handleNewTarea } from '../../utils/taskManager'

function Input({addToListaTareas}) {
  const [textInput,setTextInput] = useState("");
  const sendTarea = (e) => {
    e.preventDefault();
    const newTarea = {
      id: Date.now(),
      name: textInput,
      isCompleted: false
    }
    handleNewTarea(newTarea)
  }

  return (
    <form className="input-container"
      onSubmit={sendTarea}
    >
      <Text 
        setTextInput={setTextInput} 
      />
      <Button/>
    </form>
    
  )
}

export default Input
