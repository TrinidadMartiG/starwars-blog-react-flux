import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

let CharacterSingle = () => {
    const { store, actions } = useContext(Context)

    return (
        <Link to="/Characters">
            <span className="navbar-link" id="navbar-link">Return to all characters</span>
        </Link>
        {
        characters((item, index) => (

            <div className="col-6 mb-4">
                <div key={index} className="card">
                    <img /* src="https://starwars-visualguide.com/assets/img/characters/.jpg */ className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-tittle">{item.name}</h4>
                        <hr />
                        <p className="card-text">
                            Gender: {item.gender}
                            <hr />
                            {item.vehicles}
                        </p>
                    </div>
                </div>
            </div>
        ))
    }
    )
};

export default CharacterSingle;