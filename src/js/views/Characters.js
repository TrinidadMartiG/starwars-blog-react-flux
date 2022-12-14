import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/characters.css";


let Characters = ({ characters = [] }) => {
    const { store, actions } = useContext(Context)

    return (
            <Link to="/CharacterSingle/{index}" style={{textDecoration: 'none'}}>
   
        <div className="row m-5">
            {/* !! evalua si store es nullo o no, si es nullo continua && el ? verifica si  */}
                {!!store.people && store.people.results?.length > 0 && store.people.results.map((item, index) => (
                    <div className="col-4 mb-3">
                        <div key={index} className="card">
                            <img src={item.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-tittle">{item.name}</h4>
                                <hr />
                                <p className="card-text">
                                    <p>Gender: {item.gender}</p>
                                    <p>Hair: {item.hair_color}</p>
                                    <p>Height: {item.height}</p>
                                    <p>Mass: {item.mass}</p>
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

export default Characters;