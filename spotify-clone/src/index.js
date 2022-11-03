import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faMagnifyingGlass,faBookmark } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from 'react-router-dom';
library.add( faSpotify, faHouse, faMagnifyingGlass, faBookmark);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

