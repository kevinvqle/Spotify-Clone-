import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = () => {
    return (
        <section id ="webplayer">
            <nav id="side__webplayer">
                <div className="side__container">
                    <div className="side__heading">
                        <FontAwesomeIcon icon="fa-brands fa-spotify" className="side__title-img"/>
                        <h1 className="side__heading-title">Spotify</h1>
                    </div>
                    <div className="side__tabs">
                        <div className="side__tab">
                            <div className="side__container">
                                <FontAwesomeIcon icon="fa-solid fa-house" className="side__img" />
                                <h3 className="side__title">Home</h3>
                            </div>
                        </div>
                        <div className="side__tab">
                            <div className="side__container">
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="side__img" />
                                <h3 className="side__title">Search</h3>
                            </div>
                        </div>
                        <div className="side__tab">
                            <div className="side__container">
                                <FontAwesomeIcon icon="fa-solid fa-bookmark" className="side__img" />
                                <h3 className="side__title">Library</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default SideBar;


