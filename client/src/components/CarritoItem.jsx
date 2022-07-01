import React from 'react'

const CarritoItem = ({ item }) => {
  return (
    <div className='carritoItem'>
      <h5>
        {item.cantidad} x {item.name}
      </h5>
      <h5>${item.total} MXN</h5>
    </div>
  )
}

export default CarritoItem
