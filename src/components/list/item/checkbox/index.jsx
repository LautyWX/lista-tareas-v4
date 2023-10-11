import React from 'react'
import "./styles.scss"
import Blank from '@mui/icons-material/CheckBoxOutlineBlank';
import Checked from '@mui/icons-material/CheckBox';

function Checkbox({changeComplete,id}) {
  const [isChecked,setCheck] = React.useState(false);
  const handleClick = () => {
    console.log(id);
    changeComplete(id);
  }
  const handleCheck = () => {
    setCheck(!isChecked);
    handleClick();
    console.log(isChecked);
  }
  const showCheckBox = () => {
    return isChecked? 
    <Checked className="item-checkbox" onClick={handleCheck}/> 
    : <Blank className="item-checkbox" onClick={handleCheck}/>
  }

  return (
    <>
      {showCheckBox()}
    </>
  )
}

export default Checkbox
