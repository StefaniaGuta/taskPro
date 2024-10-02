import React from 'react';
import ReactDOM from 'react-dom/client';
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
