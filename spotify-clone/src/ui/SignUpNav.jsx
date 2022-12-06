import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from 'axios';


// this would be alot cleaner as a class instead of a function
const SignUpNav = () => {
// first thing were gonna add some use state to collect all the data
    const [inputs, setInputs] = useState({});
    const month = '02';
    const date = '12';
    const year = "2002";
// SECTION OF FUNCTIONS TO COLLECT THE DATA ***********************************
    function handleChange(event) {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    };

    function handleSubmit(e){
        e.preventDefault();
        // here we are building a json object to send to the backend
        const userInfo = { "name": inputs['name'], "email": inputs['email'], "password": inputs['password'], "month": month, "date": date, "year": year, "gender": "male"}
        // this is where the actual request is sent
        // TODO: handle the response but I dont currently know what to do with it lol
        axios.post('http://badify.site:5000/api/users/', userInfo)
            .then(response => alert('account created'))
    };

// END SECTION OF MY FUNCTIONS ************************************************


    return (
        <section id="signup">
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
                <form className="form__style" onSubmit={handleSubmit}>
                    <label htmlFor="email__label">What's your email?</label><br/>
                    <input type="email" id ="email" name="email__label" onChange={handleChange} placeholder='Enter your email.'/><br/>
                    <label htmlFor="email__label">Confirm your email</label><br/>
                    <input type="email" placeholder='Enter your email again.'/><br/>
                    <label htmlFor="password">Create a password</label><br/>
                    <input type="password" id="password" placeholder='Create a password.' onChange={handleChange} /><br/>
                    <label htmlFor="text__label">What should we call you?</label><br/>
                    <input type="text" id="name" placeholder='Enter a profile name' onChange={handleChange}/><br/>
                    <label htmlFor="date">What's your date of birth?</label><br/>
                    <input type="date" placeholder='MM/DD/YYYY'/>
                    <label htmlFor='genderOpt'>What's your gender?</label> 
                    <div className="radio__opt" onChange={handleChange}>
                        <div className="radio__sec">
                            <input type='radio' value="Male" ></input> 
                            <label htmlFor='lab__opt'>Male</label>
                        </div>
                        <div className="radio__sec">
                            <input type='radio' value="Female" ></input> 
                            <label htmlFor='lab__opt'>Female</label>
                        </div>
                    </div>
                    <button className="signup__btn" type="submit" >Sign Up</button>
                    <input type="submit" />
                    <div className="have">
                        <p className='have__para'>Already have an account?</p>
                        <Link to="/">
                            <button className="btn__login">Log In</button>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default SignUpNav;