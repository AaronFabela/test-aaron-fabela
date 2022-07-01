import React from 'react'

const BotonPay = () => {
  return (
    <div className='pagar'>
      <button
        onClick={() => console.log('Gracias por su tiempo')}
        className='pagarB'
      >
        Continuar
      </button>
    </div>
  )
}

export default BotonPay
