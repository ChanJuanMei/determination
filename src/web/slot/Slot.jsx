import React, { Component } from 'react'
import PropTypes from "prop-types";

//            props,              context
const Slot = ({ name, children }, { requestAddOnRenderer }) => {
  const addOnRenderer = requestAddOnRenderer(name)
  return (addOnRenderer && addOnRenderer()) ||
    children ||
    null
}

Slot.displayName = 'Slot'
Slot.contextTypes = { requestAddOnRenderer: PropTypes.func }
Slot.propTypes = { name: PropTypes.string }
Slot.defaultProps = { name: '$$default' }

export default Slot
