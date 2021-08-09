import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PeopleContext } from "./person-container";
import './person-details.scss';

export const PersonDetails: React.FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();
    const context = useContext(PeopleContext);
    const personDetails = context.idToPersonMap[Number(id)];

    return (
        <div className="person-details">
            <div>
                <div className="image-container"> <img src={personDetails?.thumbnail} alt=""></img></div>
                <div className="details-container">
                    <h2>{personDetails?.name}</h2>
                    <div className = "details-flex">
                        <div>
                            <label>Hair color:</label>
                            <div>
                                {personDetails?.hair_color}</div>
                        </div>
                        <div>
                            <label>Height:</label>
                            <div>
                                {personDetails?.height}</div>
                        </div>
                        <div>
                            <label>Weight:</label>
                            <div>
                                {personDetails?.weight}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="profession-container">
                    <h3>Professions</h3>
                    {personDetails?.professions.map((profession, index) =>
                        <div key={index}>{profession}</div>
                    )}
                </div>
                <div className="friends-container">
                    <h3>Friends</h3>
                    {personDetails?.friends.map((friend, index) =>
                        <div key={index}>
                            <Link to={`/person/${context.nameToIdMap[friend]}`}>
                                {friend}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}