import React, { useContext, useSyncExternalStore } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const history = useHistory()


	


	return (

		<nav className="navbar navbar-light mb-3" >
			<div className="container-fluid" style={{
				backgroundImage: 'url:("")'
			}}>
				<Link to="/">
					<span className="navbar-link" id="navbar-link">Home</span>
				</Link>
				<h1 style={{color: "yellow"}}>STAR WARS</h1>
				<div className="ml-auto">
					
					<div class="dropdown" role="group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites 
						</button>
						<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
							{store.favorites.map((favorite, index) => {
								return (
									<li key={index} className="d-flex justify-content-between m-2">
										<p className="dropdown-item" onClick={()=>{
											actions.getSinglePeople(favorite.url)
											history.push('/CharacterSingle')
										}}>
											{favorite.name}
										</p>
										<button className="btn btn-danger" onClick={()=>
										actions.deleteFavorite(favorite)}>
											<FontAwesomeIcon icon={faTrash} />
									
											</button>
									</li>
								)
							})}

						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
