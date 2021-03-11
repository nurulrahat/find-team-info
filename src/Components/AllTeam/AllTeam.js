import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons'
const AllTeam = (props) => {
    const { idTeam, strTeam, strCountry, strTeamBadge, strSport } = props.team;
    const idHistory = useHistory()
    const exploreHandle = (id) => {
        idHistory.push(`/team/${id}`);

    }
    return (
        <div className="col">
            <div className="card text-center bg-info">
                <div>
                    <img src={strTeamBadge} className="card-img-top img-fluid w-50" alt="..." />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{strTeam}</h2>
                    <p>Sports Type: {strSport}</p>
                    <h4>Country: {strCountry}</h4>
                    <button type="button" className="btn btn-outline-danger" onClick={() => exploreHandle(idTeam)}>Explore  <FontAwesomeIcon icon={faArrowRight} />  </button>


                </div>
            </div>
        </div>



    );
};

export default AllTeam;