import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const logInNav = () => {
    return (
        <section id="login__section">
            <nav id = "nav__creation">
                <div className = "nav__container">
                    <FontAwesomeIcon icon = "fa-brands fa-spotify" className="nav__icon"/>
                    <h1 className = "nav__title">Spotify</h1>
                </div>
            </nav>
            <div className = "div__container">
                <p className = "login__text">To continue, log in to Spotify.</p>
                <button class = "pill__button">CONTINUE WITH GOOGLE</button>
                <div className="or__container">
                    <div className="left"></div>
                    <p className="OR">OR</p>
                    <div className="right"></div>
                </div>
                <div className="form__container">
                    <form className="form__style">
                        <label htmlFor="email__label">Email Address</label><br/>
                        <input type="email" name="email__label" placeholder='Email Address or Username'/><br/>
                        <label htmlFor="password__label">Password</label><br/>
                        <input type="password" placeholder='Password'/><br/>
                        <div className="button__container">
                            <div className="checkbox__container">
                                <input type="checkbox"/>
                                <label htmlFor="remember__me">Remember me</label>
                            </div>
                            <button className="login__btn">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default logInNav;