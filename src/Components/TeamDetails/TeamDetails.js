import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './teamDetails.css'
import teamImage1 from '../../Images/male.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFlag, faFutbol, faMars, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
const TeamDetails = () => {
    const { id } = useParams()
    const [teamDetails, setTeamDetails] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [id])
    const { strTeam, intFormedYear, strCountry, strGender, strTeamBadge, strTeamBanner, strSport, strStadiumThumb,strFacebook,strInstagram,strTwitter } = teamDetails;
    return (
        <div className="bg-info.bg-gradient detailsCls container">
            <div className="" style={{
                backgroundImage: `url(${strStadiumThumb})`,
            
            }}>
                <img className="w-25 mt-3" src={strTeamBadge} alt="" />
            </div>

            <div className="row mt-5 w-75 text-light">
                <div className="col-md-6 ">
                    <h2>{strTeam}</h2>
                    <p><FontAwesomeIcon icon={faEye} /> Founded:{intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag} /> Country:{strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sport Type:{strSport}</p>
                    <p><FontAwesomeIcon icon={faMars} /> Gender:{strGender}</p>

                </div>
                <div className="col-md-6">
                    <img className="w-100" src={teamImage1} alt="" srcset="" />
                </div>
                <div className="col-12 mt-5">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur dolor debitis pariatur dignissimos? Quas temporibus adipisci eos consectetur facere Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eius totam voluptate voluptas harum nam vero deleniti sit, aperiam commodi corrupti amet, nulla quibusdam alias, laboriosam pariatur dolores nemo id.</p>
                </div>
                <footer className="footerCls">
                    
                    <a href={strFacebook}><FontAwesomeIcon icon={faFacebook}/ ></a>
                    <a href={strInstagram}><FontAwesomeIcon icon={faInstagram}/ ></a>
                    <a href={strTwitter}><FontAwesomeIcon icon={faTwitter}/ ></a>
                    
                    <p>@all rights reserved by Nurul_Mostafa_RAhat</p>
                </footer>
            </div>

        </div>
    );
};

export default TeamDetails;