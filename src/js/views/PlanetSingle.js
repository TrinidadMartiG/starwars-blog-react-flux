import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

let PlanetSingle = () => {
    const { store, actions } = useContext(Context)
    console.log("single", store.singleplanet)
    const baseImgUrl = "https://starwars-visualguide.com/assets/img/"

    return (
        <>
            {store.singleplanet.uid?
                <div className="card mb-3 mx-auto" style={{ maxWidth: "1200px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={baseImgUrl + 'planets/'+ store.singleplanet.uid + '.jpg'} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{store.singleplanet.properties.name}</h5>
                                <hr />
                                <p className="card-text">
                                    Climate: {store.singleplanet.properties.climate}
                                </p>
                                <p className="card-text">
                                    Diameter: {store.singleplanet.properties.diameter}
                                </p>
                                <p className="card-text">
                                    Gravity: {store.singleplanet.properties.gravity}
                                </p>
                                <p className="card-text">
                                    Population: {store.singleplanet.properties.population}
                                </p>
                                <p className="card-text">
                                    Surface Water: {store.singleplanet.properties.surface_water} km/h
                                </p>
                                <p className="card-text">
                                    Terrain: {store.singleplanet.properties.terrain}
                                </p>
                                <button className="btn btn-warning">
                                    <Link to="/planets">
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



export default PlanetSingle;