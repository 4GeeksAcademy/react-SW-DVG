import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import Favorite from "./favorite";

export const Navbar = () => {

	const { store } = useContext(Context);

	return (
		<nav className="navbar">
			<Link to="/">
				<img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" />
			</Link>
			<div class="dropdown">
				<button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites 
					<span className="favNum">{store.favorites.length}</span>
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#"></a> <Favorite/> </li>
				</ul>
			</div>
		</nav>
	);
};
