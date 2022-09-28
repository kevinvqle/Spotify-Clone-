import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sideBar = () => {
    return (
        <nav>
            <div className="nav__container">
                <div className="nav__heading">
                    <FontAwesomeIcon icon="fa-brands fa-spotify" className="nav__img"/>
                    <h1 className="nav__title">Spotify</h1>
                </div>
            </div>
        </nav>
    );
}

export default sideBar;
