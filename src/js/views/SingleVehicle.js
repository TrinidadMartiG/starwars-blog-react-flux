import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

let SingleVehicle = () => {
    const { store, actions } = useContext(Context)
    console.log("single", store.singlevehicle)
    const baseImgUrl = "https://starwars-visualguide.com/assets/img/"

    return (
        <>
            {store.singlevehicle.uid?
                <div className="card mb-3 mx-auto" style={{ maxWidth: "1200px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={baseImgUrl + 'vehicles/'+ store.singlevehicle.uid + '.jpg'} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{store.singlevehicle.properties.name}</h5>
                                <hr />
                                <p className="card-text">
                                    Model: {store.singlevehicle.properties.model}
                                </p>
                                <p className="card-text">
                                    Vehicle Class: {store.singlevehicle.properties.vehicle_class}
                                </p>
                                <p className="card-text">
                                    Manufacturer: {store.singlevehicle.properties.manufacturer}
                                </p>
                                <p className="card-text">
                                    Lenght: {store.singlevehicle.properties.length}
                                </p>
                                <p className="card-text">
                                    Crew: {store.singlevehicle.properties.crew}
                                </p>
                                <p className="card-text">
                                    Max Atmosphering Speed: {store.singlevehicle.properties.max_atmosphering_speed} km/h
                                </p>
                                <p className="card-text">
                                    Consumables: {store.singlevehicle.properties.consumables}
                                </p>
                                <button className="btn btn-primary">
                                    <Link to="/vehicles">
                                        Go Back</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <Link to="/">
                    Go home
                </Link>
            }
        </>
    );
};



export default SingleVehicle;