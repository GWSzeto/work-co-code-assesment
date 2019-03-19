import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #5e96d1;
  border: none;
  color: white;
  border-radius: 50px;
  font-size: 8pt;
  height: 2.5em;
  width: 10em;
`

const Image = styled.img`
  display: flex;
  height: 20em;
`

const ProductInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 2 1;
  padding-left: 3em;
`

const ProductItem = ({className, product, onAddToCartClicked }) => (
  <div className={className}>
    <Image src={product.image} alt={product.title}/> 
    <ProductInfo>
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
    </ProductInfo>
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
  flex-flow: row wrap;
  background-color: white;
  padding-bottom: 2em;
  border-radius: 3em;
`