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
                <div className="image-container"> <img src={personDetails?.thumbnail}></img></div>
                <div className="details-container">
                    <h2>Personal details</h2>
                    <div>{personDetails?.name}</div>
                    <div>{personDetails?.hair_color}</div>
                    <div>{personDetails?.height}</div>
                    <div>{personDetails?.weight}</div>
                </div>
            </div>
            <div>
                <div className="profession-container">
                    <h2>Professions</h2>
                    {personDetails?.professions.map((profession, index) =>
                        <div key={index}>{profession}</div>
                    )}
                </div>
                <div className="friends-container">
                    <h2>Friends</h2>
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