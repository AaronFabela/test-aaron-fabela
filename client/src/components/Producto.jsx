import React from 'react'

const Producto = ({ name, id, addToCar, deleteFromCar }) => {
  return (
    <div className='linea-producto'>
      <div className='botones'>
        <button onClick={() => deleteFromCar(id)}>-</button>
        <button onClick={() => addToCar(id)}>+</button>
      </div>
      <div className='nombre'>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Producto
