import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const StarshipInfo = () => {
    const [infoStarship, setInfoStarship] = useState("")
    const params = useParams()


    useEffect(() => {
        fetch(`https://www.swapi.tech/api/starships/${params.uid}`)
            .then(resp => resp.json())
            .then(data => setInfoStarship(data.result))
            .catch(err => err)
    })



    return (
        <div className="container">
            <div className="cardInfo">
                <div className="imgInfo">
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`} />
                </div>
                <div className="descriptionInfo">
                    <h1>
                        {infoStarship == "" ? "Loading..." : infoStarship.properties.name}
                    </h1>
                    <ul className="characteristics">
                        <li>Model: {infoStarship == "" ? "Loading..." : infoStarship.properties.model}  </li>
                        <li>Cargo Capacity: {infoStarship == "" ? "Loading..." : infoStarship.properties.cargo_capacity} </li>
                        <li>Manufacturer: {infoStarship == "" ? "Loading..." : infoStarship.properties.manufacturer} </li>
                        <li>Cost in Credits: {infoStarship == "" ? "Loading..." : infoStarship.properties.cost_in_credits} </li>
                        <li>Hyperdrive Rating: {infoStarship == "" ? "Loading..." : infoStarship.properties.hyperdrive_rating} </li>
                    </ul>
                </div>
            </div>
        </div>
    )



}