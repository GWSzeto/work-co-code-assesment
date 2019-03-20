import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

export const toggleModal = () => ({
    type: types.TOGGLE_MODAL
})

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const removeFromCart = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

const decrementFromCartUnsafe = productId => ({
  type: types.DECREMENT_FROM_CART,
  productId
})

export const decrementFromCart = productId => (dispatch, getState) => {
  if (getState().cart.quantityById[productId] > 0) {
    dispatch(decrementFromCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
  })
}
