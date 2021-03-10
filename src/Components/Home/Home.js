import React, { useEffect, useState } from 'react';
import AllTeam from '../AllTeam/AllTeam';
import bgImage from '../../Images/pleague.jpg'
import "./home.css";

// https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League
const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
        fetch(url)
            .then(response => response.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <>
            <div className="bgImage" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}>
                <h1>Find Team Info</h1>
            </div>
            <div className=" row row-cols-1 row-cols-md-4 g-5 m-3 bg-secondary ">

                {
                    teams.map(teams => <AllTeam team={teams}></AllTeam>)
                }
            </div>
                {/* <footer>
                    <a href=""><FontAwesomeIcon icon={faCoffee}/></a>
                    <a href=""><FontAwesomeIcon icon={faCoffee}/></a>
                    <a href=""><FontAwesomeIcon icon={faCoffee}/></a>
                    <p>@all rights reserved by Nurul_Mostafa_RAhat</p>
                </footer> */}
        </>);
};

export default Home;