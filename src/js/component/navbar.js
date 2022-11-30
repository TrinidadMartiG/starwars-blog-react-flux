import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		
		<nav className="navbar navbar-light mb-3 bg-image">
			<div className="container-fluid">

				<Link to="/">
					<span className="navbar-link">Home</span>
				</Link>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" />
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
					<button className="btn btn-success" onClick={() => {
						actions.addLike()
					}}>Plus one CONTEXT IN ACTION {store.likes}
					</button>
				</div>
			</div>
		</nav>
	);
};
