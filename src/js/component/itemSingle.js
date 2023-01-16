import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

let ItemSingle = (props) => {
    const { store, actions } = useContext(Context)
    console.log("single", store.singlepeople)
    const baseImgUrl = "https://starwars-visualguide.com/assets/img/"

    return (
        <>
            {props.url ?
                <div className="card mb-3 mx-auto" style={{ maxWidth: "1000px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={baseImgUrl + 'characters/' + store.singlepeople.uid + '.jpg'} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                
                                <button className="btn btn-primary">
                                    <Link to="/">
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



export default ItemSingle;