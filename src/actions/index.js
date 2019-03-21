import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

export const toggleModal = () => ({
    type: types.TOGGLE_MODAL
})

export const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => async dispatch => {
  // const products = await shop.getProducts()
  // dispatch(recieveProducts(products))
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

const removeFromCartUnsafe = (productId, quantity) => ({
  type: types.REMOVE_FROM_CART,
  productId,
  quantity
})

export const removeFromCart = productId => (dispatch, getState) => {
  const quantity = getState().cart.quantityById[productId] 
  if (quantity > 0) {
    dispatch(removeFromCartUnsafe(productId, quantity))
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
