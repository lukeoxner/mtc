import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Event from "./pages/Event";
import Hallett from "./pages/Hallett";

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/schedule" component={Schedule} />
					<Route exact path="/event" component={Event} />
					<Route exact path="/hallett" component={Hallett} />
					<Route exact path="*" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
