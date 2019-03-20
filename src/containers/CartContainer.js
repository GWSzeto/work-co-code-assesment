import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, toggleModal, removeFromCart } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ modalOpen, products, total, checkout, toggleModal, removeFromCart}) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
    modalOpen={modalOpen}
    toggleModal={toggleModal} 
    removeFromCart={removeFromCart} />
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

export default connect(
  mapStateToProps,
  {
    checkout,
    toggleModal,
    removeFromCart
  }
)(CartContainer)
