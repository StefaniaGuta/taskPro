import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import  App  from 'components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './components/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/taskPro">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
=======
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyles from 'assets/styles/GlobalStyles';
import './index.css';
import App from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import '../src/assets/i18/i18';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/task-pro">
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
>>>>>>> 8c8da78dbc4389aefe80c6dabd66558ebd12f0d1
