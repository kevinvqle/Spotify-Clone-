import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchMusic from '../pages/SearchMusic';
import { useState } from 'react';


const TopBar = ({sendSearch}) => {
    const [searchTerms, setSearch] = useState('');

   const search = (e) => {
    if(e.key === "Enter"){
        //setSearch(e.target.value);
        sendSearch(e.target.value);
    }
    }

    return (
        <nav id="top__bar">
            <div className="top__container">
                <div className="search__container">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='img__search'/>
                    <input type="text" id="searchBar" placeholder="What do you want to listen to?" className="search__input" value={searchTerms} onChange = {event => setSearch(event.target.value)} onKeyPress={search} />
                </div>
                <div className="account__container">
                    <h5 className="account__info">Jameboyyy</h5>
                </div>
            </div>
        </nav>
    );
}

export default TopBar;
