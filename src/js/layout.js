import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PeopleInfo } from "./component/characterInfo";
import { CharacterList } from "./component/characterList";
import { PlanetInfo } from "./component/planetInfo";
import { PlanetList } from "./component/planetList";
import { StarshipList } from "./component/starshipList";
import { StarshipInfo } from "./component/starshipInfo";

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
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characterList" element={<CharacterList />} />
						<Route path="/characterInfo/:uid" element={<PeopleInfo />} />
						<Route path="/planetList" element={<PlanetList />} />
						<Route path="/planetInfo/:uid" element={<PlanetInfo />} />
						<Route path="/starshipList" element={<StarshipList />} />
						<Route path="/starshipInfo/:uid" element={<StarshipInfo />} />
 						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
