import React from 'react';
import { useState } from 'react';
import SideBar from '../webplayer/SideBar';
import TopBar from '../webplayer/TopBar';
// adding this here cause i dont know a better place
import Player from '../ui/Player'
import SearchMusic from './SearchMusic';
import { useRef } from 'react';
import { createRef } from 'react';

const SearchPage = () => {
    const [searchTerms, setSearchTerms] = useState("");


    

    return (
        <section id="SearchPage">
            <SideBar />
            <TopBar sendSearch={setSearchTerms} />
            <SearchMusic searchTerms={searchTerms}/>
        </section>
        
    );
}

export default SearchPage;
