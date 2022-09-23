import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeNav = () => {
    return (
        <nav>
            <div className="nav__container">
                <FontAwesomeIcon icon="fa-brands fa-spotify" className="nav__icon"/>
                <h1 className="nav__title">Spotify</h1>
            </div>
        </nav>
    );
}

export default HomeNav;
