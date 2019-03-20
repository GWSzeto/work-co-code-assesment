import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InventoryContainer from '../containers/InventoryContainer'

const ProductInfo = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex: 1 1 40%;
    padding: 0 0 1em 1.5em;
`

const Title = styled.h3`
    display: flex;
    flex: 1 1 100%;
    font-size: 26pt;
    font-weight: 600;
    margin-top: 0;
`

const Price = styled.div`
    display: flex;
    flex: 1 1 100%;
    font-size: 14pt;
    margin-top: -2.5em;
`

const Image = styled.img`
    display: flex;
    height: 10em;
    width: 15em;
`

const RemoveButton = styled.button`
    display: flex;
    border: none;
    background-color: inherit;
    align-items: baseline;
    font-size: 16pt;
    margin-bottom: -1.5em;
    color: red;
`
const CartProduct = ({className, price, quantity, title, id, image, onRemoveFromCartClicked }) => (
    <div className={className}>
        <Image src={image} alt={title} />
        <ProductInfo>
            <Title>{title}</Title>
            <Price>{`$${price}`}</Price>
            <RemoveButton onClick={onRemoveFromCartClicked}>Remove</RemoveButton>
        </ProductInfo>
        <InventoryContainer quantity={quantity} id={id}/>
    </div>
)

CartProduct.propTypes = {
    className: PropTypes.string,
    price: PropTypes.number,
    inventory: PropTypes.number,
    title: PropTypes.string,
}

export default styled(CartProduct)`
    display: flex;
    flex-flow: row wrap;
    flex: 1 1 100%;
    padding-bottom: 1em;
    width: 40em;
`
