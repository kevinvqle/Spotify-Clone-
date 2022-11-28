import React from 'react';
import LoginPage from './creation/LoginPage';
import SignUp from './creation/SignUp';
import { Routes, Route} from "react-router-dom";
import SearchPage from './pages/SearchPage';



const App = () => {
    return (
        <div className="App">
            <SearchPage />
            <Routes>
                <Route path="search__page" element={ <SearchPage/>} />
            </Routes>
        </div>
    );
}

export default App;
