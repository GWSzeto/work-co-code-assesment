import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { decrementFromCart, addToCart } from '../actions'
import Inventory from '../components/Inventory'

const InventoryContainer = ({quantity, id, addToCart, decrementFromCart}) => {
    return(
    <Inventory
        quantity={quantity}
        onAddToCartClicked={() => addToCart(id)}
        onDecrementFromCartClicked={() => decrementFromCart(id)}
    />
)}

InventoryContainer.propTypes = {
    quantity: PropTypes.number,
    id: PropTypes.number,
}

export default connect(
    null,
    {
        addToCart,
        decrementFromCart,
    }
)(InventoryContainer)