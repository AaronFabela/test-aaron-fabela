import { TYPES } from '../actions/carrito.actions'

export const carritoInitialState = {
  productos: [],
  car: [],
}

export const carritoReducer = (state, action) => {
  switch (action.type) {
    case TYPES.CARGAR_DATOS:
      return {
        ...state,
        productos: action.payload,
      }
    case TYPES.ADD_TO_CAR:
      let newItem = state.productos.find(
        (producto) => producto._id === action.payload
      )
      newItem['price'] = parseFloat(newItem.price)
      newItem['total'] = newItem.price

      let itemCart = state.car.find((item) => item._id === newItem._id)
      // console.log(newItem, itemCart)
      return itemCart
        ? {
            ...state,
            car: state.car.map((item) =>
              item._id === newItem._id
                ? {
                    ...item,
                    cantidad: item.cantidad + 1,
                    total: (item.cantidad + 1) * item.price,
                  }
                : item
            ),
          }
        : { ...state, car: [...state.car, { ...newItem, cantidad: 1 }] }
    case TYPES.DELETE_FROM_CAR:
      let toDelete = state.car.find((item) => item._id === action.payload)
      if (toDelete != null) {
        return toDelete.cantidad > 1
          ? {
              ...state,
              car: state.car.map((item) =>
                item._id === toDelete._id
                  ? {
                      ...item,
                      cantidad: item.cantidad - 1,
                      total: (item.cantidad - 1) * item.price,
                    }
                  : item
              ),
            }
          : {
              ...state,
              car: state.car.filter((item) => item._id !== toDelete._id),
            }
      } else {
        return { ...state }
      }

    default:
      break
  }
}
