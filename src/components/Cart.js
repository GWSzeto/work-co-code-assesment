import React from 'react'
import PropTypes from 'prop-types'
import CartProduct from './CartProduct'
import Modal from 'react-responsive-modal'
import styled from 'styled-components'
import { Line } from '../containers/App'
import shoppingCart from '../shopping-cart.svg'


const modalStyles = {
  modal: {
    display: "inline-block",
    width: "50em",
    height: "50em",
    "border-radius" : "1em",
  },
  closeIcon: {
    height: "3em",
    width: "3em",
    opacity: "0.3",
  }
}

const CartLayout = styled.div`
  padding: 0 3em 0 3em;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
`

const Title = styled.h3`
  font-size: 25pt;
  display: flex;
  flex: 1 1 100%;
  margin-bottom: 0;
`

const EmptyCart = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 43em;
  width: 44em;
  justify-content: center;
  align-items: center;
`

const ShoppingCart = styled.img`
  display: flex;
  width: 5em;
  height: 5em;
  opacity: 0.3;
`

const EmptyCartText = styled.p`
  display: flex;
  font-size: 14pt;
  color: #a6a6a6;
`

const ProductContainer = styled.div`
  display: flex;
  flex: 1 1 100%;
`

const Cart  = ({ modalOpen, products, total, onCheckoutClicked, addToCart, removeFromCart, toggleModal }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <CartProduct
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        id={product.id}
        image={product.image}
        onAddToCartClicked={() => addToCart(product.id)}
        onRemoveFromCartClicked={removeFromCart}
        key={product.id}
      />
    )
  ) : (
    <EmptyCart>
      <ShoppingCart src={shoppingCart} alt="" />
      <EmptyCartText>Please add some products to cart.</EmptyCartText>
    </EmptyCart>
  )

  return (
    <Modal open={modalOpen} onClose={toggleModal} styles={modalStyles}>
      <CartLayout>
        <Title>Your Cart</Title>
        <Line />
        <div>{nodes}</div>
        {hasProducts ? (
          <div>
            <p>Total: &#36;{total}</p>
            <button onClick={onCheckoutClicked}
              disabled={hasProducts ? '' : 'disabled'}>
              Checkout
            </button>
          </div>
        ) : null}
      </ CartLayout>
    </Modal>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
