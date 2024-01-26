import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PeopleInfo = () => {
    const [infoPeople, setInfoPeople] = useState("")
    const params = useParams()


    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${params.uid}`)
            .then(resp => resp.json())
            .then(data => setInfoPeople(data.result))
            .catch(err => err)
    })



    return (
        <div className="container">
            <div className="cardInfo">
                <div className="imgInfo">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} />
                </div>
                <div className="descriptionInfo">
                    <h1>
                        {infoPeople == "" ? "Loading..." : infoPeople.properties.name}
                    </h1>
                    <br />
                    {infoPeople == "" ? "Loading..." : infoPeople.description}
                    <br />
                    <ul className="characteristics">
                        <li>Height: {infoPeople == "" ? "Loading..." : infoPeople.properties.height}  </li>
                        <li>Mass: {infoPeople == "" ? "Loading..." : infoPeople.properties.mass} </li>
                        <li>Hair Color: {infoPeople == "" ? "Loading..." : infoPeople.properties.hair_color} </li>
                        <li>Eye Color: {infoPeople == "" ? "Loading..." : infoPeople.properties.eye_color} </li>
                    </ul>
                </div>
            </div>
        </div>
    )



}



