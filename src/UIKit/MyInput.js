import React from 'react'
import './myInput.css'
const MyInput = ({field, method }) => {
	return (
		<form>
			<div className="group">
				<input onChange={method} type="text" required/>
					<span className="highlight"></span>
					<span className="bar"></span>
					<label>{field}</label>
			</div>
		</form>
	)
}

export default MyInput
