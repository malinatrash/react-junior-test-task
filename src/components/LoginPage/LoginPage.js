import React from 'react'
import MyInput from '../../UIKit/MyInput'
import MyButton from '../../UIKit/MyButton'

const LoginPage = () => {
	return (
		<form className="form">
			<h1 className="mb-5">Welcome!</h1>
			<MyInput field="Email"/>
			<MyInput field="Пароль"/>
			<MyButton text="Войти"></MyButton>
		</form>
	)
}

export default LoginPage
