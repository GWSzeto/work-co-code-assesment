import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { decrementFromCart, addToCart } from '../actions'

const InventoryContainer = ({quantity, id}) => (
    <Inventory
        quantity={quantity}
        onAddToCartClicked={() => addToCart(id)}
        onDecrementFromCartClicked={() => decrementFromCart(id)}
    />
)

InventoryContainer.propTypes = {
    quantity: propTypes.number
}
