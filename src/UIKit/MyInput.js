import React from 'react'
import './myInput.css'
const MyInput = ({props, field }) => {
	return (
		<form>
			<div className="group">
				<input type="text" required/>
					<span className="highlight"></span>
					<span className="bar"></span>
					<label>{field}</label>
			</div>
		</form>

)
}

export default MyInput
