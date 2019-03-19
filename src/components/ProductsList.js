import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProductsList = ({ className, children }) => (
  <div className={className}>
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default styled(ProductsList)`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`
