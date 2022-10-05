import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const logInNav = () => {
    return (
        <div>
            <nav id="nav__creation">
                <div className="nav__container">
                    <FontAwesomeIcon icon="fa-brands fa-spotify" className="nav__icon"/>
                    <h1 className="nav__title">Spotify</h1>
                </div>
            </nav>
            <div className = "div__container">
                    <button class = "pill__button">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
}

export default logInNav;