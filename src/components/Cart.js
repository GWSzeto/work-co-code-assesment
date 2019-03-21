import React from 'react'
import PropTypes from 'prop-types'
import CartProduct from './CartProduct'
import Modal from 'react-modal'
import styled from 'styled-components'
import { Line } from '../containers/App'
import shoppingCart from '../shopping-cart.svg'
import CartAmountText from './CartAmountText'
import './Cart.css'

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

  @media only screen and (max-width: 365px) {
    font-size: 42pt;
    margin-bottom: 0.5em;
  }
`

const EmptyCart = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 43em;
  width: 46.5em;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 365px) {
    width: 103vh;
    height: 160vh;
  }
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

const CartWithProductsLayout = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 100%;
  padding-bottom: 1em;
  width: 40em;

  @media only screen and (max-width: 768px) {
    width: 48em;
  }
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
  margin-bottom: 1.5em;

  @media only screen and (max-width: 365px) {
    width: 35em;
    margin-left: -2em;
    border-radius: 0;
    margin-bottom: 0;
  }
`

const CloseButton = styled.button`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border: none;
  background-color: inherit;
  font-size: 21pt;
  color: #9a9a9a;
  margin: 0.3em 0 -1em -0.3em;


  @media only screen and (max-width: 365px) {
    font-size: 27pt;
    margin: 0.5em 0 -1.5em -0%.5em;
  }
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
  return (
    <Modal isOpen={modalOpen} className="Modal" overlayClassName="Overlay">
      <CloseButton onClick={toggleModal}>X</CloseButton>
      <CartLayout>
        <Title>Your Cart</Title>
        <Line />
        <div>{nodes}</div>
        {hasProducts ? (
          <div>
            <CartWithProductsLayout>
              <Line />
              <CartAmountText title="Subtotal" amount={`$${parseFloat(subtotal).toFixed(2)}`} />
              <CartAmountText title="Taxes" amount={`$${parseFloat(taxes).toFixed(2)}`} /> 
              <Line />
              <CartAmountText title="Total" amount={`$${parseFloat(totalAmount).toFixed(2)}`} />
            </CartWithProductsLayout>
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
