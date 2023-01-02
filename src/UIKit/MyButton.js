import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './myButton.css'

export const MyButton = ({text, isDisabled}) => {
	const navigate = () => {

	}
	return (
		<button
			to='/profile'
			disabled={isDisabled}
			className='button'
		>
			<Link className='button' to={`profile`}>{text}</Link>
		</button>
	)
}

