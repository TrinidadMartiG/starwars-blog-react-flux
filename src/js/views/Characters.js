import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/characters.css";


let Characters = ({ }) => {
    const { store, actions } = useContext(Context)
    const baseImgUrl = "https://starwars-visualguide.com/assets/img/"
    const history = useHistory()

    return (
        <div className="row m-5">
            {/* !! evalua si store es nullo o no, si es nullo continua && el ? verifica si  */}
            {!!store.people && store.people.results?.length > 0 && store.people.results.map((item) => (
                <div key={item.uid} className="col-4 mb-3">
                    <div className="card">
                        <img src={baseImgUrl + 'characters/' + item.uid + '.jpg'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-tittle">{item.name}</h4>
                            <p className="card-text">
                            </p>
                        </div>
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-primary" onClick={()=>{
                                actions.getSinglePeople(item.url)
                                history.push('/CharacterSingle')
                            }}>
                                See details
                            </button>
                            <button className="btn btn-warning" onClick={() => {actions.addFavorites(item) }}>
                                <i className="fa fa-heart text-danger" />
                            </button>
                        </div>
                        <hr />
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Characters;