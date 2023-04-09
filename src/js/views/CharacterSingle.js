import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

let CharacterSingle = () => {
    const { store, actions } = useContext(Context)
    console.log("single", store.singlepeople)
    const baseImgUrl = "https://starwars-visualguide.com/assets/img/"

    return (
        <>
            {store.singlepeople.uid ?
                <div className="card mb-3 mx-auto" style={{ maxWidth: "1200px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={baseImgUrl + 'characters/' + store.singlepeople.uid + '.jpg'} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{store.singlepeople.properties.name}</h5>
                                <hr />
                                <p className="card-text">
                                    Gender: {store.singlepeople.properties.gender}
                                </p>
                                <p className="card-text">
                                    Height: {store.singlepeople.properties.height}
                                </p>
                                <p className="card-text">
                                    Mass: {store.singlepeople.properties.mass}
                                </p>
                                <p className="card-text">
                                    Hair Color: {store.singlepeople.properties.hair_color}
                                </p>
                                <p className="card-text">
                                    Skin Color: {store.singlepeople.properties.skin_color}
                                </p>
                                <p className="card-text">
                                    Eye Color: {store.singlepeople.properties.eye_color}
                                </p>
                                <p className="card-text">
                                    Birth Year: {store.singlepeople.properties.birth_year}
                                </p>
                                <button className="btn btn-warning">
                                    <Link to="/characters">
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



export default CharacterSingle;