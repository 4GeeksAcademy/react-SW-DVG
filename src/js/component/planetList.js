import React from "react";
import { useContext } from "react";
import {Context} from "../store/appContext";
import { Link } from "react-router-dom";




export const PlanetList = () => {
    const {store, actions} = useContext(Context)
   


    return (
        <div className="card-group">
            {store.planets.map(planet =>   
                <div className="card" style={{ width: '18rem' }} >
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="No image Available"/>
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">Population: {planet.population}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body"><Link to={`/planetInfo/${planet.uid}`} className="btn btn-warning">More Info</Link>
                        <button onClick={() => (actions.getFavorite(planet))} className="favorite"><i class="far fa-heart"></i></button></small>
                    </div>
                </div>  )}
        </div>
       
    )
}







