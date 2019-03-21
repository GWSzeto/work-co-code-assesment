import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  position: absolute;
  background-color: #5e96d1;
  border: none;
  color: white;
  border-radius: 50px;
  font-size: 12pt;
  height: 2.5em;
  width: 10em;
  margin: 14em 0 0 33em;

  @media only screen and (max-width: 768px) {
    margin: 26em 0 0 2em;
    font-size: 17pt;
  }
`

const ProductItem = ({className, product, onAddToCartClicked }) => (
  <div className={className}>
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory}
      image={product.image} />
    <Button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'ADD TO CART' : 'Sold Out'}
    </Button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default styled(ProductItem)`
  display: flex;
  background-color: white;
  margin-bottom: 1em;
  border-radius: 1em;
`