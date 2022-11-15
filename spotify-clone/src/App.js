import React from 'react';
import LoginPage from './creation/LoginPage';
import SignUp from './creation/SignUp';
import { Routes, Route} from "react-router-dom";



const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" exact element={ <LoginPage/> } />
                <Route path="/signup" exact element ={ <SignUp/>} />
            </Routes>
        </div>
    );
}

export default App;
