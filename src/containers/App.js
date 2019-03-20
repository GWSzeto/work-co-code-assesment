import React from 'react'
import { connect } from 'react-redux'
import { toggleModal } from '../actions'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import shoppingCart from '../shopping-cart.svg'
import styled from 'styled-components'

const Title = styled.h1`
  display: flex;
  flex: 1 1 90%;
  font-weight: 900;
  font-size: 32pt;
`

const Line = styled.hr`
  margin-top: -0.5em;
  color: #e7e7e7;
  margin-top: -1em;
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
  font-size: 12pt;
`

const CartText = styled.p`
  display: flex;
`

const App = ({modalOpen, toggleModal}) => (
  <div>
    <Header>
      <Title>Acme Store</Title>
      <Button onClick={toggleModal}>
        <ShoppingCart src={shoppingCart} alt=""/>
        <CartText>Your cart is empty</CartText>
      </Button>
    </Header>
    <Line/>
    <ProductsContainer />
    <Line/>
    <CartContainer />
  </div>
)

const mapStateToProps = state => ({
  modalOpen: state.modal.open
})

export default connect(
  mapStateToProps,
  { toggleModal },
)(App)
