import React from 'react'
import proptypes from 'prop-types'

function Button(props) {
  return (
    <button onClick={props.clickButton} className={`btn ${props.buttonColor}`}>
        {props.label}
    </button>
  )
}

Button.propTypes = {
    label: proptypes.string.isRequired,
    buttonColor: proptypes.string,
    clickButton: proptypes.func
}

Button.deafultProps = {
    label:'cliccami'
}

export default Button