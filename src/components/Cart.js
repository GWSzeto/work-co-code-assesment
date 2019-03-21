import React from 'react'
import PropTypes from 'prop-types'
import CartProduct from './CartProduct'
import Modal from 'react-responsive-modal'
import styled from 'styled-components'
import { Line } from '../containers/App'
import shoppingCart from '../shopping-cart.svg'
import CartAmountText from './CartAmountText'

const modalStyles = {
  modal: {
    display: "inline-block",
    width: "50em",
    height: "50em",
    "border-radius" : "1em",
    "overflow-y": "auto",
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

const CheckoutButton = styled.button`
  display: flex;
  flex: 1 1 100%;
  background-color: #5e97d1;
  border: none;
  font-size: 16pt;
  border-radius: 2em;
  color: white;
  margin-top: 1em;
  margin-left: -0.3em;
  justify-content: center;
  height: 3em;
  width: 10em;
`

const Cart  = ({ modalOpen, products, total, onCheckoutClicked, toggleModal, removeFromCart }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <CartProduct
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        id={product.id}
        image={product.image}
        onRemoveFromCartClicked={() => removeFromCart(product.id)}
        key={product.id}
      />
    )
  ) : (
    <EmptyCart>
      <ShoppingCart src={shoppingCart} alt="" />
      <EmptyCartText>Please add some products to cart.</EmptyCartText>
    </EmptyCart>
  )
  
  const subtotal = Number(total)
  const taxes = subtotal * 0.08067838643
  const totalAmount = subtotal + taxes
  console.log(typeof subtotal)
  console.log(typeof taxes)
  console.log(typeof totalAmount)
  return (
    <Modal open={modalOpen} onClose={toggleModal} styles={modalStyles} >
      <CartLayout>
        <Title>Your Cart</Title>
        <Line />
        <div>{nodes}</div>
        {hasProducts ? (
          <div>
            <Line />
            <CartAmountText title="Subtotal" amount={`$${parseFloat(subtotal).toFixed(2)}`} />
            <CartAmountText title="Taxes" amount={`$${parseFloat(taxes).toFixed(2)}`} /> 
            <Line />
            <CartAmountText title="Total" amount={`$${parseFloat(totalAmount).toFixed(2)}`} />
            <CheckoutButton onClick={onCheckoutClicked}
              disabled={hasProducts ? '' : 'disabled'}>
              CHECKOUT
            </CheckoutButton>
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
