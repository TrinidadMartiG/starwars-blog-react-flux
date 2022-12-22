import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

let Planets = ({ planets = [] }) => {
    const { store, actions } = useContext(Context)

    return (
            <Link to="/planetsingle" style={{textDecoration: 'none'}}>
   
        <div className="row m-5">
            {/* !! evalua si store es nullo o no, si es nullo continua && el ? verifica si  */}
            {!!store.planets && store.planets.results?.length > 0 && store.planets.results.map((item, index) => (
                    <div className="col-4 mb-3">
                        <div key={index} className="card">
                            <img src={item.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-tittle">{item.name}</h4>
                                <hr />
                                <p className="card-text">
                                    <p>Gender: {item.gender}</p>
                                   
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
            </Link>
    )
};

export default Planets;