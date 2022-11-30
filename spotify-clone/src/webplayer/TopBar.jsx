import React, { useEffect , useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";

const TopBar = () => {
    const [songs, setSongs] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        getSongs().then(json => {
            setSongs(json)
            return json
        }).then(json => {
            setSearchResults(json)
        })
    }, [])

    let nameValidationInput = document.getElementById('myInput')
    
    function useInput() {
        let NameValue = nameValidationInput.value;
        console.log(NameValue);
    }

    nameValidationInput.onchange = useInput;
    nameValidationInput.blur = useInput;

    const api = axios.create({
        baseURL: 'https://badify.site'
    })

    const getSongs = async (NameValue) => {
        const response = await api.get(`/${NameValue}`)
        console.log(response);
        return response.data
    }

    return (
        <>
        <nav id="top__bar">
            <div className="top__container">
                <div className="search__container">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='img__search'/>
                    <input type="text" id="myInput" placeholder="What do you want to listen to?" className="search__input"/>
                </div>
                <div className="account__container">
                    <h5 className="account__info">Your Mom</h5>
                </div>
            </div>
        </nav>
       <section id="search__result">
            <div className="searchResult__container">
                <h1></h1>
            </div>
        </section>
        </>
    );
}

export default TopBar;
