import React from 'react'
import './myButton.css'

const MyButton = ({props, text}) => {
	return (
		<button className="button">{text}</button>
	)
}

export default MyButton
