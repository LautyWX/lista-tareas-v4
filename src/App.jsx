import "./App.scss";
import Title from "./components/title/Index.jsx";
import Input from "./components/input/Index";
import List from "./components/list/Index";
import { useState } from "react";

function App() {
  //List Logic//
  const [listaTareas,setListaTareas] = useState([]);
  const addToListaTareas = (tarea) => {
    const tareasActualizadas = [tarea, ...listaTareas];
    setListaTareas(tareasActualizadas)
    console.log(listaTareas)
  };
  const removeTarea = (id) => {
    let tareasActualizadas = listaTareas.filter(
      tarea => {return tarea.id !== id} //cuando usamos solo corchetes sin un return, la funcion no retorna nada
    )
    console.log(listaTareas);
    console.log(id,tareasActualizadas);
    setListaTareas(tareasActualizadas);
  }
  const changeComplete = (id) => {
    const tareasActualizadas = listaTareas.map(
      (task) => {
        if(task.id === id) task.isCompleted = !task.isCompleted
        return task
      }
    )
    setListaTareas(tareasActualizadas)    
  }
  //Render//
  return (
    <div className="main-container">
      
      <Title />
      <Input
        addToListaTareas = {addToListaTareas}
      />
      <List
        listaTareas={listaTareas}
        removeTarea={removeTarea}
        changeComplete={changeComplete}/>
    </div>
  );
}

export default App;
