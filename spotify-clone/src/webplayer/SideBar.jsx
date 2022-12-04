import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <nav id="side__webplayer">
            <div className="side__container">
                <div className="side__heading">
                    <FontAwesomeIcon icon="fa-brands fa-spotify" className="side__title-img"/>
                    <h1 className="side__heading-title">Badify</h1>
                </div>
                <div className="side__tabs">
                    <div className="side__tab">
                        <div className="side__container">
                            <FontAwesomeIcon icon="fa-solid fa-house" className="side__img" />
                            <Link to="/"className="side__title">Home</Link>
                        </div>
                    </div>
                    <div className="side__tab">
                        <div className="side__container">
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="side__img" />
                            <Link to="SearchPage"className="side__title">Search</Link>
                        </div>
                    </div>
                    <div className="side__tab">
                        <div className="side__container">
                            <FontAwesomeIcon icon="fa-solid fa-bookmark" className="side__img" />
                            <Link className="side__title">Your Library</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default SideBar;


