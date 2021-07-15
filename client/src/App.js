import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
// import Loading from "./components/Loading";

function App() {
	// const { user, isAuthenticated, isLoading } = useAuth0();

	// if (isLoading) {
	// 	return <Loading />;
	// }

	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
					<Route exact path="*" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
