import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { PlanetList } from "../component/planetList";
import { Context } from "../store/appContext";
import { CharacterList } from "../component/characterList";
import { Navbar } from "../component/navbar";
import { StarshipList } from "../component/starshipList";

export const Home = () => {
	
	const {store, actions} = useContext(Context)

	return (
	<div className="allCards">
		<div className="characters">
			<h1>Characters</h1>
			<CharacterList />
		</div>
		<br/>
		<div className="planets">
			<h1>Planets</h1>
			<PlanetList />
		</div>
		<br/>
		<div className="starships">
			<h1>Starships</h1>
			<StarshipList />
		</div>
	</div>)
};
