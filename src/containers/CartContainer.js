import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, toggleModal, addToCart, removeFromCart } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ modalOpen, products, total, checkout, toggleModal }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
    modalOpen={modalOpen}
    addToCart={addToCart}
    removeFromCart={removeFromCart}
    toggleModal={toggleModal} />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  modalOpen: state.modal.open,
  products: getCartProducts(state),
  total: getTotal(state)
})

const mapDispatchToProps = (state) => ({
  checkout,
  toggleModal,
  addToCart,
  removeFromCart
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartContainer)
