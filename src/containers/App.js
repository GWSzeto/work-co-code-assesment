import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import styled from 'styled-components'

const Title = styled.h2`
  font-weight: 900;
  font-size: 26pt;
`
const Line = styled.hr`
  margin-top: -0.5em;
  color: #e7e7e7;
  margin-top: -1em;
`

const App = className => (
  <div>
    <Title>Acme Store</Title>
    <Line/>
    <ProductsContainer />
    <Line/>
    <CartContainer />
  </div>
)

export default App
