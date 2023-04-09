import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { uid } from "uid";
import { Context } from "../store/appContext";

let Vehicles = () => {
    const { store, actions } = useContext(Context)
    const history = useHistory()
    const baseImgUrl = "https://starwars-visualguide.com/assets/img/"

    return (
        <div className="row">
            {!!store.vehicles && store.vehicles.results?.length > 0 && store.vehicles.results.map((item) => (
                <div key={item.uid} className="col-4 mb-3">
                    <div className="card">
                        <img src={baseImgUrl + 'vehicles/' + item.uid + '.jpg'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-tittle">{item.name}</h4>
                            <hr />

                        </div>
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-warning" onClick={() => {
                                actions.getSingleVehicle(item.url)
                                history.push('/SingleVehicle')
                            }}>
                                See details
                            </button>
                            <button className="btn btn-warning" onClick={() => { actions.addFavorites(item) }}>
                                <i className="fa fa-heart text-danger" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Vehicles;