import MyInput from '../../UIKit/MyInput'
import MyButton from '../../UIKit/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { login, password } from '../../redux/actions/actions'
import { LOGIN, PASSWORD } from '../../constants/constans'

import {
	useLocation,
	useNavigate,
	useParams
} from "react-router-dom";

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}

	return ComponentWithRouterProp;
}

const LoginPage = () => {
	const state = useSelector(state => state.auth)
	const dispatch = useDispatch()

	const handlerLogin = (event) => {
		dispatch(login(LOGIN, event.target.value))
	}
	const handlerPassword = (event) => {
		dispatch(password(PASSWORD, event.target.value))
	}


	return (
		<form className="form">
			<h1 className="mb-5">Welcome!</h1>
			<MyInput method={handlerLogin} field="Email"/>
			<MyInput method={handlerPassword} field="Пароль"/>
			<MyButton isDisabled={!(state.login === "developer12" && state.password === "kaka")} text="Войти"></MyButton>
		</form>
	)
};

export default withRouter(LoginPage)