import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PlanetInfo = () => {
    const [infoPlanet, setInfoPlanet] = useState("")
    const params = useParams()


    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${params.uid}`)
            .then(resp => resp.json())
            .then(data => setInfoPlanet(data.result))
            .catch(err => err)
    })



    return (
        <div className="container">
            <div className="cardInfo">
                <div className="imgInfo">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} />
                </div>
                <div className="descriptionInfo">
                    <h1>
                        {infoPlanet == "" ? "Loading..." : infoPlanet.properties.name}
                    </h1>
                    <ul className="characteristics">
                        <li>Population: {infoPlanet == "" ? "Loading..." : infoPlanet.properties.population}  </li>
                        <li>Climate: {infoPlanet == "" ? "Loading..." : infoPlanet.properties.climate} </li>
                        <li>Terrain: {infoPlanet == "" ? "Loading..." : infoPlanet.properties.terrain} </li>
                        <li>Surface Water: {infoPlanet == "" ? "Loading..." : infoPlanet.properties.surface_water} </li>
                    </ul>
                </div>
            </div>
        </div>
    )



}