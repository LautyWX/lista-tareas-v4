import React from 'react'
import "./styles.scss"
import Copy from '@mui/icons-material/ContentPaste';
import Share from '@mui/icons-material/Share';
import Delete from '@mui/icons-material/DeleteOutline';

function ItemButton({removeTarea,id,iconType}) {
  const handleDelete = () => {
    removeTarea(id);
  }
  const handleCopy = () => {
    navigator.clipboard.writeText("Hola Lauty");
  }
  const handleShare = () => {

  }
  
  const renderIcon = () => {
    switch(iconType){
      case "copy": return <Copy onClick={handleCopy}/> ;break;
      case "share": return <Share onClick={handleShare}/> ;break;
      case "delete": return <Delete onClick={handleDelete}/> ;break;
    }
  }
  return (
    <button 
      
      className="Border"
    >{renderIcon()}</button>
  )
}

export default ItemButton
