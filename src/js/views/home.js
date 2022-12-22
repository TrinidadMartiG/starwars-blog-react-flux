import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Home = () => {
	const { store, actions } = useContext(Context)

	console.log('consolelog store people', store.people)

	return (
		<div className="container-fluid text-center bg-dark">

			<div className="row m-5">
				<div className="col justify-content-center my-5">
					<div className="card h-100" >
						<img src="https://blog.personal.com.py/wp-content/uploads/2020/09/los-3-mejores-episodios-de-Rick-y-Morty.jpg" className="card-img-top" alt="..."
							width="250"
							height="350" />
						<div className="card-body">
							<h5 className="card-title">Characters</h5>
							<p className="card-text">Do you feel the force?</p>
							<Link to="/Characters">
								<button type="button" class="btn btn-primary">Primary</button>
							</Link>

						</div>
					</div>
				</div>
				<div className="col justify-content-center my-5">
					<div className="card h-100" >
						<img src="https://i.pinimg.com/originals/50/31/ce/5031ce529b1f247a7070d9d64cf05fa0.jpg"
							width="250"
							height="350"
							className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Vehicles</h5>
							<p className="card-text">Look at that speeder...</p>
							<Link to="/Vehicles">
								<button type="button" class="btn btn-primary">Primary</button>
							</Link>

						</div>
					</div>
				</div>
			</div>
			<div className="row m-5">
				<div className="col justify-content-center">
					<div className="card h-100" >
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Planets</h5>
							<p className="card-text">Do you feel the force?</p>
							<Link to="/Planets">
								<button type="button" class="btn btn-primary">Primary</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col justify-content-center">
					<div className="card h-100" >
						<img src="https://i.pinimg.com/originals/50/31/ce/5031ce529b1f247a7070d9d64cf05fa0.jpg" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Vehicles</h5>
							<p className="card-text">Look at that speeder...</p>
						</div>
					</div>
				</div>
			</div>

			<button className="btn btn-success" onClick={() => {
				actions.addLike()
			}}>Plus one {store.likes}
			</button>
		</div>
	)
};


/* const fetchData = async (URLVehicles) => {
		const resp = await fetch(URLVehicles);
		const data = await resp.json();
	​
		data.forEach((character, index) => {
			let newData = [];
		   
			character.vehicles.forEach(async (veh) => {
				const resp2 = await fetch(veh);
				const data2 = await resp2.json();
				newData.push(data2.name);
			})
			data[index].vehicles = newData;
		})
	} */