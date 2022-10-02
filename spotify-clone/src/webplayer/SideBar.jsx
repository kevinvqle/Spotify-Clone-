import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = () => {
    return (
        <nav id="nav__webplayer">
            <div className="nav__container">
                <div className="nav__heading">
                    <FontAwesomeIcon icon="fa-brands fa-spotify" className="nav__img"/>
                    <h1 className="nav__title">Spotify</h1>
                </div>
                <div className="nav__tabs">
                    <div className="nav__tab">
                        <div className="tab__container">
                            <FontAwesomeIcon icon="fa-solid fa-house" className="tab__img" />
                            <h3 className="tab__title">Home</h3>
                        </div>
                    </div>
                    <div className="nav__tab">
                        <div className="tab__container">
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="tab__img" />
                            <h3 className="tab__title">Search</h3>
                        </div>
                    </div>
                    <div className="nav__tab">
                        <div className="tab__container">
                            <FontAwesomeIcon icon="fa-solid fa-bookmark" className="tab__img" />
                            <h3 className="tab__title">Your Library</h3>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default SideBar;


