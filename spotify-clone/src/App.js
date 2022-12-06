import React from 'react'; 
// import LoginPage from './creation/LoginPage';
// import SignUp from './creation/SignUp';
import { Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import LoginPage from './creation/LoginPage';
import SignUp from './creation/SignUp';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" exact element={ <LoginPage/> } />
                <Route path="/signup" exact element ={ <SignUp/>} />
                <Route path="HomePage" exact element={ <HomePage/>} />
                <Route path="SearchPage" exact element={ <SearchPage/> } />
            </Routes>
        </div>
    );
}

export default App;
