import React from 'react'
import BotonPay from './BotonPay'
import CarritoItem from './CarritoItem'

const Carrito = ({ car, subTotal, descuento, iva, total }) => {
  return (
    <div className='card carrito'>
      <h5
        style={{
          color: 'darkblue',
          marginTop: '10px',
          marginBottom: '10px',
          fontWeight: 'bold',
        }}
      >
        <div>
          {car.length > 0 ? 'Actualización de Precio' : 'Tu carrito esta vacío'}
        </div>
      </h5>
      {car.map((carItem) => (
        <CarritoItem key={carItem._id} item={carItem}></CarritoItem>
      ))}
      <hr className='separador'></hr>
      <div>
        <div className='totales'>
          <h5>Subtotal</h5>
          <h5>${subTotal} MXN</h5>
        </div>
        {descuento > 1 ? (
          <div className='totales'>
            <h5 style={{ color: 'darkblue' }}>Descuentos</h5>
            <h5 style={{ color: 'darkblue' }}>${descuento} MXN</h5>
          </div>
        ) : (
          <></>
        )}
        <div className='totales'>
          <h5>I.V.A.</h5>
          <h5>${iva} MXN</h5>
        </div>
        <div className='totales'>
          <h5 style={{ fontWeight: 'bold' }}>Total</h5>
          <h5 style={{ fontWeight: 'bold' }}>${total} MXN</h5>
        </div>
      </div>
      <BotonPay></BotonPay>
    </div>
  )
}

export default Carrito
