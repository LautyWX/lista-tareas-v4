import React from 'react'
import Item from './item/Index'
import './styles.scss'

function List({listaTareas,removeTarea,changeComplete}) {
  const lista = listaTareas;

  const handleLista = () => {
    return lista.map(
      (tarea) => {
        return(
          <Item
            key={tarea.id}
            id={tarea.id}
            name={tarea.name}
            isCompleted={tarea.isCompleted}
            removeTarea={removeTarea}
            changeComplete={changeComplete}
          />
        )
      }
    )
  }
  const emptyMessage = () => {
    return(
      <li className="empty-message">Parece que la lista de tareas esta vacia.¿Porque no intentas escribir algo arriba?</li>
    )
  }
  return (
    <ul className="list-container">
      {lista.length==0? emptyMessage():handleLista()}
    </ul>
  )
}

export default List
