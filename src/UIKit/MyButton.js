import React from 'react'
import './myButton.css'
import { Link } from 'react-router-dom'

const MyButton = ({text, isDisabled}) => {
	return (
		<Link className={`button ${isDisabled}`} to='/' >
			{text}
		</Link>
	)
}

export default MyButton