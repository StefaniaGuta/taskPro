import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import  App  from 'components/App/App';
=======
import { App } from 'components/App';
>>>>>>> 5254c0e46bb385c3f9e3c369b5056561b8c385fb
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/taskPro" futureFlags={{ v7_startTransition: true }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
