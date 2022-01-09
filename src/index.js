import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'views/App';
import Header from 'components/organisms/header/header.js';
import Root from 'views/Root';
import './fonts/Alata/Alata-Regular.ttf';

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
