import React from 'react'
import { connect } from 'react-redux'
import { toggleModal } from '../actions'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import shoppingCart from '../shopping-cart.svg'
import styled from 'styled-components'
import Modal from 'react-modal'

const Title = styled.h1`
  display: flex;
  flex: 1 1 70%;
  font-weight: 900;
  font-size: 32pt;
  margin-bottom: 0;
`

export const Line = styled.hr`
  display: flex;
  color: #e7e7e7;
  flex: 1 1 100%;
  margin-bottom: 1.5em;
`

const ShoppingCart = styled.img`
  display: flex;
  width: 1em;
  padding-right: 0.5em;
`

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
`

const Button = styled.button`
  display: flex;
  flex-flow: row wrap;
  border: none;
  background-color: inherit;
  align-items: baseline;
  font-size: 17pt;
  transition-duration: 0.5s;

  &:hover {
    color: #3f7ec0;
  }
`

const CartText = styled.p`
  display: flex;
`

Modal.setAppElement(document.getElementById('root'))

const App = ({ quantity, toggleModal }) => (
  <div>
    <Header>
      <Title>Acme Store</Title>
      <Button onClick={toggleModal}>
        <ShoppingCart src={shoppingCart} alt=""/>
        {quantity == 0 ? (
          <CartText>Your cart is empty</CartText>
        ) : null}
      </Button>
    </Header>
    <Line/>
    <ProductsContainer />
    <CartContainer />
  </div>
)

const mapStateToProps = state => ({
  quantity: state.cart.addedIds.length
})

export default connect(
  mapStateToProps,
  { toggleModal },
)(App)
