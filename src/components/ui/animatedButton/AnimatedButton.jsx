import React from 'react'
import proptypes from 'prop-types'
import './animatedButton.scss'

function AnimatedButton(props) {
  return (
    <button onClick={props.clickButton} className={`btn ${props.buttonColor}`}>
        {props.label}
    </button>
  )
}

AnimatedButton.propTypes = {
    label: proptypes.string.isRequired,
    buttonColor: proptypes.string,
    clickButton: proptypes.func
}

AnimatedButton.deafultProps = {
    label:'cliccami'
}

export default AnimatedButton