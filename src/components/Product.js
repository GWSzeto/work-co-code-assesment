import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h3`
  display: flex;
  flex: 1 1 80%;
  font-size: 24pt;
  font-weight: 900;
  margin-bottom: 0;
`

const Price = styled.div`
  display: flex;
  flex: 1 1 20%;
  font-weight: 50;
  font-size: 16pt;
  padding-top: 2.75em;
`

const Inventory = styled.div`
  margin-top: -7em;
  color: #9b9b9b;
`

const Image = styled.img`
  display: flex;
  height: 20em;
  border-radius: 1em 0 0 1em;
`

const ProductInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 40%;
  padding-left: 3em;
`

const Product = ({className ,price, inventory, title, image}) => (
  <div className={className}>
    <Image src={image} alt={title}/> 
    <ProductInfo>
      <Title>{title}</Title>
      <Price>{`$${price}`}</Price>
      <Inventory>{inventory ? `${inventory} REMAINING` : null}</Inventory>
    </ProductInfo>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default styled(Product)`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 100%;
`
