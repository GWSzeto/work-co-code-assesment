import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h3`
    display: flex;
    flex: 1 1 50%;
    font-weight: 900;
    font-size: 16pt;
`

const Amount = styled.p`
    display: flex;
    flex: 1 1 100%;
    justify-content: flex-end;
    font-size: 14pt;
`

const CartAmountText = ({className, title, amount}) => (
    <div className={className}>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
    </div>
)

export default styled(CartAmountText)`
    display: flex;
    flex: 1 1 100%;
    width: 44em;
`