import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const signUpNav = () => {
    return (
        <section id="login__section">
            <nav id = "sign_nav__creation">
                <div className = "sign_nav__container">
                    <FontAwesomeIcon icon = "fa-brands fa-spotify" className="sign_nav__icon"/>
                    <h1 className = "sign_nav__title">Spotify</h1>
                </div>
            </nav>
            <div className = "div__container">
                <p className = "signup__text">Sign up for free to start</p>
                <p className='listening__text'>listening</p>
                <button class = "sign_pill__button">Sign up with Google</button>
            </div>
            <div className="sign_or__container">
                    <div className="sign__left"></div>
                    <p className="sign__OR">or</p>
                    <div className="sign__right"></div>
            </div>
            <p className="email__text">Sign up with your email address</p>
            <div className="form__container">
                <form className="form__style">
                    <label htmlFor="email__label">What's your email?</label><br/>
                    <input type="email" name="email__label" placeholder='Enter your email.'/><br/>
                    <label htmlFor="email__label">Confirm your email</label><br/>
                    <input type="email" placeholder='Enter your email again.'/><br/>
                    <label htmlFor="password">Create a password</label><br/>
                    <input type="password" placeholder='Create a password.'/><br/>
                    <label htmlFor="text__label">What should we call you?</label><br/>
                    <input type="text" placeholder='Enter a profile name'/><br/>
                    <label htmlFor="date">What's your date of birth?</label><br/>
                    <input type="date" placeholder='MM/DD/YYYY'/>
                    <label>What's your gender?</label>
                    <input type='radio'/>
                    <label>Male</label>     
                </form>
            </div>
        </section>
    );
}

export default signUpNav;