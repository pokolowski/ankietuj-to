import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'views/App';
import Header from 'components/organisms/MainView/header/header.js';
import Root from 'views/Root';
import './fonts/Alata/Alata-Regular.ttf';
import { AuthProvider } from 'hooks/useAuth';
import { APIProvider } from 'hooks/useAPI';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'REDUX/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <APIProvider>
            <Root />
          </APIProvider>
        </AuthProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
