import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faMagnifyingGlass,faBookmark } from '@fortawesome/free-solid-svg-icons';

library.add( faSpotify, faHouse, faMagnifyingGlass, faBookmark);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

