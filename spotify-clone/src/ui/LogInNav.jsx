import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// this is for routing
import axios from 'axios';

const LogInNav = () => {
    // this will hold the fields we need
    const [input, setInputs] = useState([]);

    // this is the function that is gonna track the input and add them as needed
    function handleChange(event) {
        const id = event.target.id;
        const value = event.target.value;
        setInputs(values => ({...values, [id]: value}));
    };
    // this just builds our json obj and sends it on over to the backend
    function handleSubmit(e){
        e.preventDefault();
        // here we are building a json object to send to the backend
        const userInfo = { "email" : input['email'], "password" : input['password']}
        // this is where the actual request is sent
        // TODO: handle the response but I dont currently know what to do with it lol
        axios.post('http://badify.site:5000/api/login/', userInfo)
            .then(response => alert(response['data']))
    };

    return (
        <section id="/">
            <nav id = "nav__creation">
                <div className = "nav__container">
                    <FontAwesomeIcon icon = "fa-brands fa-spotify" className="nav__icon"/>
                    <h1 className = "nav__title">Spotify</h1>
                </div>
            </nav>
            <div className = "div__container">
                <p className = "login__text">To continue, log into Spotify.</p>
                <button class = "pill__button">CONTINUE WITH GOOGLE</button>
                <div className="or__container">
                    <div className="left"></div>
                    <p className="OR">OR</p>
                    <div className="right"></div>
                </div>
                <div className="form__container">
                    <form className="form__style" onSubmit={handleSubmit}>
                        <label htmlFor="email__label">Email Address</label><br/>
                        <input type="email" name="email__label" id="email" placeholder='Email Address or Username' onChange={handleChange} value={input['email']}/><br/>
                        <label htmlFor="password__label">Password</label><br/>
                        <input type="password" id='password' placeholder='Password' onChange={handleChange} value={input['password']}/><br/>
                        <div className="button__container">
                            <div className="checkbox__container">
                                <input type="checkbox"/>
                                <label htmlFor="remember__me">Remember me</label>
                            </div>
                            <button className="login__btn">Log in</button>
                        </div>
                    </form>
                </div>
                <div className="bottom"></div>
                <div className="dont__container">
                    <h3 className="dont__title">
                        Don't have an account?
                    </h3>
                    <Link to="signup">
                        <button className="create__btn">SIGN UP FOR SPOTIFY</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default LogInNav;