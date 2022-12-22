import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Characters from "./views/Characters";
import Vehicles from "./views/Vehicles";
import PlanetSingle from "./views/PlanetSingle";
import Planets from "./views/Planets";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/Characters">
							<Characters />
						</Route>
						<Route exact path="/Vehicles">
							<Vehicles />
						</Route>
						<Route exact path="/CharacterSingle/:theid">
							<Vehicles />
						</Route>
						
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/Planets">
							<Planets />
						</Route>
						<Route exact path="/Planetsingle">
							<PlanetSingle />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
