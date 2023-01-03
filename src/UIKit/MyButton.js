import React from 'react'
import { Link } from "react-router-dom";
import './myButton.css'

export const MyButton = ({text, isDisabled}) => {
	return (
		isDisabled
			? <Link className={'button disabled-link'} to={`profile`}>{text}</Link>
			:  <Link className={'button'} to={`profile`}>{text}</Link>
	)
}

