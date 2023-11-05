import React from 'react'
import Name from './name'
import ItemButton from './button/Index.jsx'
import Checkbox from './checkbox'
import './styles.scss'


function Item({id,name,isCompleted,changeComplete}) {
  
  return (
    <div className={isCompleted? "item-container completed":"item-container"}>
        <span className="block">
          <Checkbox changeComplete={changeComplete} id={id}/>
          <Name name={name} id={id}/>
        </span>
        <span className="block">
          <ItemButton id={id} iconType={"edit" }/>
          <ItemButton id={id} iconType={"delete"} />
        </span>
    </div>
  )
}

export default Item
