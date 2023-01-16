import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

let Planets = () => {
    const { store, actions } = useContext(Context)
    const baseImgUrl = "https://starwars-visualguide.com/assets/img/"

    return (
            <div className="row m-5">
                {/* !! evalua si store es nullo o no, si es nullo continua && el ? verifica si  */}
                {!!store.planets && store.planets.results?.length > 0 && store.planets.results.map((item, uid) => (
                    <div key= {item.uid} className="col-4 mb-3">
                        <div className="card">
                            <img src={baseImgUrl + 'planets/' + item.uid + '.jpg'} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-tittle">{item.name}</h4>
                                <hr />
                                <p className="card-text">
                                    <p>Gender: {item.gender}</p>

                                    <hr />
                                </p>
                            </div>
                            <div className="d-flex justify-content-around">
                            <button className="btn btn-primary" onClick={() => {
                                actions.getSinglePlanet(item.url)
                                history.push('/planetsingle')
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

export default Planets;