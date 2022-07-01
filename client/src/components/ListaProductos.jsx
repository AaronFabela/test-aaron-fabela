import React from 'react'
import Producto from './Producto'

const ListaProductos = ({ productos, addToCar, deleteFromCar }) => {
  return (
    <div className='productos'>
      {productos.map((producto) => (
        <Producto
          name={producto.name}
          id={producto._id}
          addToCar={addToCar}
          deleteFromCar={deleteFromCar}
        ></Producto>
      ))}
    </div>
  )
}

export default ListaProductos
