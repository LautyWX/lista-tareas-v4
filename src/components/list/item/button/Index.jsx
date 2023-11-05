import React from 'react'
import "./styles.scss"
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/DeleteOutline';
import { handleDelete,handleEdit } from '../../../../utils/taskManager';

function ItemButton({id,iconType}) {
  
  const renderIcon = () => {
    switch(iconType){
      case "edit": return <Edit onClick={() => handleEdit(id)}/> ;break;
      case "delete": return <Delete onClick={()=> handleDelete(id)}/> ;break;
    }
  }
  return (
    <button 
      className="Border"
    >{renderIcon()}</button>
  )
}

export default ItemButton
