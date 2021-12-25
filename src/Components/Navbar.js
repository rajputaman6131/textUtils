import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <div className="center">
            {props.heading}
        </div>
    )
}

Navbar.propTypes={
    heading: PropTypes.string
}