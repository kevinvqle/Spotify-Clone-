import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TopBar = () => {
    return (
        <nav id="top__bar">
            <div className="top__container">
                <div className="search__container">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='img__search'/>
                    <input type="text" placeholder="What do you want to listen to?" className="search__input"/>
                </div>
                <div className="account__container">
                    <h5 className="account__info">Massi Villareal</h5>
                </div>
            </div>
        </nav>
    );
}

export default TopBar;
