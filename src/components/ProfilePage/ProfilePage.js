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


const ProfilePage = ({login}) => {
  return(
		<h1>{login}</h1>
	)
}

export default withRouter(ProfilePage)