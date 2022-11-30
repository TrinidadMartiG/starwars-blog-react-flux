import React, { useEffect, useState, useContext } from "react";
import { useInRouterContext } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Characters from "./Characters";


export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => { }, [])
	console.log('consolelog store people', store.vehicles)
	console.log('consolelog store people', store.planets)
	console.log('consolelog store people', store.species)


	return (
		<div className="container-flex text-center m-5 bg-dark">
			
			<div className="row justify-content-center border border-warning">
				<div className="col-2 border border-danger">
					<div className="card border" style={{ width: 350 }}>
						<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-characters-ranked-1577122930.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Characters</h5>
							<p className="card-text">Do you feel the force?</p>
							<a href="#" className="btn btn-primary"></a>
						</div>
					</div>
				</div>
				<div className="col-2 border border-danger">
					<div className="card border border-warning" style={{ width: 350 }}>
						<img src="https://i.pinimg.com/originals/50/31/ce/5031ce529b1f247a7070d9d64cf05fa0.jpg" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Vehicles</h5>
							<p className="card-text">Look at that speeder...</p>
							<a href="#" className="btn btn-primary"></a>
						</div>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-2">
					<div className="card border border-warning" style={{ width: 350 }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Characters</h5>
							<p className="card-text">Do you feel the force?</p>
							<a href="#" className="btn btn-primary"></a>
						</div>
					</div>
				</div>
				<div className="col-2">
					<div className="card border border-warning" style={{ width: 350 }}>
						<img src="https://i.pinimg.com/originals/50/31/ce/5031ce529b1f247a7070d9d64cf05fa0.jpg" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Vehicles</h5>
							<p className="card-text">Look at that speeder...</p>
							<a href="#" className="btn btn-primary"></a>
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