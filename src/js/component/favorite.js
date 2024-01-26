import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


const Favorite = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()

    return (
        <div className="row">
            {store.favorites.map((fav) => {
                return (
                    <div>
                        <p className="favs">
                            {fav.name}<i class="icon fa fa-trash" onClick={() => actions.deleteFavorite(fav)}></i>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Favorite