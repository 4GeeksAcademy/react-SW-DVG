import { useContext } from "react";
import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CharacterList = () => {
    const { store, actions } = useContext(Context)


    return (
        <div className="card-group">
            {store.characters.map(character =>
                <div className="card" style={{ width: '18rem' }} >
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">
                            Gender: {character.gender}
                            <br />
                            Hair Color: {character.hair_color}
                            <br />
                            Eye Color: {character.eye_color}
                        </p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body"><Link to={`/characterInfo/${character.uid}`} className="btn btn-warning">More Info</Link>
                        <button onClick={() => (actions.getFavorite(character))} className="favorite"><i class="far fa-heart"></i></button></small>
                    </div>
                </div>)}
        </div>
    )
}