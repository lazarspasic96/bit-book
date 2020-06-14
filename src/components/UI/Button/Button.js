import React from 'react'
import classes from './Button.module.css'


const Button = (props) => {
return <button className = { ['waves-effect waves-light btn-small', 'treca-sreca', props.className].join(' ')} disabled = {props.disabled} onClick = {props.clicked}>{props.children}</button>
}

export default Button