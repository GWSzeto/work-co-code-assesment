import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import styled from 'styled-components'

const StyledProductsContainer = styled(ProductsContainer)`
  display: flex;
  flex-wrap: wrap;
`

const App = () => (
  <div>
    <h2>Acme</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
