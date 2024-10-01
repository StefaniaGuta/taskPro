import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
<<<<<<< HEAD
import { authReducer } from './auth/authSlice';
import { themeReducer } from './theme/ThemeSlice'
import storage from 'redux-persist/lib/storage';
=======
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { boardsReducer } from './board/boardSlice';
import { themeReducer } from './theme/ThemeSlice';
import { supportReducer } from './support/supportSlice';
import { boardSearchReducer } from './search/searchSlice';
>>>>>>> 8c8da78dbc4389aefe80c6dabd66558ebd12f0d1

const authPersistConfig = {
  key: 'auth',
  storage,
<<<<<<< HEAD
  whitelist: ['token'],
=======
  whitelist: ['token', 'refreshToken'],
>>>>>>> 8c8da78dbc4389aefe80c6dabd66558ebd12f0d1
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
<<<<<<< HEAD
    theme:themeReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
=======
    boards: boardsReducer,
    theme: themeReducer,
    support: supportReducer,
    search: boardSearchReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
>>>>>>> 8c8da78dbc4389aefe80c6dabd66558ebd12f0d1
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
<<<<<<< HEAD
  ],
=======
>>>>>>> 8c8da78dbc4389aefe80c6dabd66558ebd12f0d1
});

export const persistor = persistStore(store);