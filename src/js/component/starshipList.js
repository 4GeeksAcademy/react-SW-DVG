import React from "react";
import { useContext } from "react";
import {Context} from "../store/appContext";
import { Link } from "react-router-dom";




export const StarshipList = () => {
    const {store, actions} = useContext(Context)
   


    return (
        <div className="card-group">
            {store.starships.map(starship =>   
                <div className="card" style={{ width: '18rem' }} >
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} className="card-img-top" alt="No image Available"/>
                    <div className="card-body">
                        <h5 className="card-title">{starship.name}</h5>
                        <p className="card-text">Manufacturer: {starship.manufacturer}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body"><Link to={`/starshipInfo/${starship.uid}`} className="btn btn-warning">More Info</Link>
                        <button onClick={() => (actions.getFavorite(starship))} className="favorite"><i class="far fa-heart"></i></button></small>
                    </div>
                </div>  )}
        </div>
       
    )
}


