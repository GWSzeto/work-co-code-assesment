import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TickButton = styled.button`
    display: flex;
    background-color: #f5f5f5;
    border: none;
    height: 4em;
    width: 15em;
    color: #8d929b;
    justify-content: center;
    border-radius: ${props => props.side === "left" ? "2em 0 0 2em" : "0 2em 2em 0"};
    transition-duration: 0.2s;

    &:disabled {
        opacity: 0.5;
    }

    &:hover:enabled {
        background-color: #5e97d1;
        color: white;
    }
`

const Quantity = styled.p`
    display: flex;
    width: 10em;
    font-size: 18pt;
    justify-content: center;
`

const TickerText = styled.p`
    font-size: 35pt;
    margin-top: ${props => props.side === "-" ? "-0.08em" : "-.01em"};
`

const Inventory = ({className, quantity, onAddToCartClicked, onDecrementFromCartClicked}) => (
    <div className={className}>
        <TickButton
          disabled={quantity > 1 ? '' : 'disabled'}
          onClick={onDecrementFromCartClicked}
          side="left">
          <TickerText side="-">-</TickerText>
        </TickButton>
        <Quantity>{quantity}</Quantity>
        <TickButton
          onClick={onAddToCartClicked}
          side="right"
        >
          <TickerText side="+">+</TickerText>
        </TickButton>
    </div>
)

export default styled(Inventory)`
    display: flex;
    flex-flow: row wrap;
    padding-top: 2em;
    flex: 1 1 100%;
    justify-content: center;
`
