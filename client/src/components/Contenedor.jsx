import React, { useState, useEffect, useReducer } from 'react'
import Heading from './Heading'
import Carrito from './Carrito'
import axios from 'axios'
import {
  carritoInitialState,
  carritoReducer,
} from '../reducers/carrito.reducer'
import { TYPES } from '../actions/carrito.actions'
import ListaProductos from './ListaProductos'

const API_URL = 'http://localhost:4000/api/products/'

const Contenedor = () => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState)
  const { productos, car } = state
  const [subTotal, setSubTotal] = useState(0)
  const [descuento, setDescuento] = useState(0)
  const [total, setTotal] = useState(0)
  const [iva, setIva] = useState(0)

  const addToCar = (id) => {
    dispatch({ type: TYPES.ADD_TO_CAR, payload: id })
  }
  const deleteFromCar = (id) => {
    dispatch({ type: TYPES.DELETE_FROM_CAR, payload: id })
  }

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      dispatch({ type: TYPES.CARGAR_DATOS, payload: res.data })
    })
  }, [])

  useEffect(() => {
    const sT = car
      .map((item) => item.total)
      .reduce((prev, curr) => prev + curr, 0)
    setSubTotal(sT)
    let des = 0
    for (let x in car) {
      if (car[x].code === 'Nda') {
        if (car[x].cantidad % 2 === 0) {
          des = (car[x].cantidad / 2) * car[x].price
        } else {
          des = ((car[x].cantidad - 1) / 2) * car[x].price
        }
      }
    }
    setDescuento(des)
    setIva((subTotal - descuento) * 0.16)
    setTotal(iva + (subTotal - descuento))
  }, [car, descuento, iva, subTotal])

  useEffect(() => {
    setIva((subTotal - descuento) * 0.16)
    setTotal(iva + (subTotal - descuento))
  }, [subTotal, descuento, iva])

  return (
    <div>
      <Heading></Heading>
      <div className='contenido'>
        <ListaProductos
          productos={productos}
          addToCar={addToCar}
          deleteFromCar={deleteFromCar}
        ></ListaProductos>

        <Carrito
          car={car}
          iva={iva.toFixed(2)}
          subTotal={subTotal.toFixed(2)}
          descuento={descuento.toFixed(2)}
          total={total.toFixed(2)}
        ></Carrito>
      </div>
    </div>
  )
}

export default Contenedor
