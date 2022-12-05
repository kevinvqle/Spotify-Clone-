import React from 'react'; 
// import LoginPage from './creation/LoginPage';
// import SignUp from './creation/SignUp';
import { Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" exact element={ <HomePage/>} />
                <Route path="SearchPage" exact element={ <SearchPage/> } />
                {/* i removed these for our current dev situation */}
                {/*<Route path="/" exact element={ <LoginPage/> } />*
                <Route path="/signup" exact element ={ <SignUp/>} />*/}
            </Routes>
        </div>
    );
}

export default App;
