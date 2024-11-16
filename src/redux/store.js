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
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { boardsReducer } from './board/boardSlice';
import { themeReducer } from './theme/ThemeSlice';
import { boardSearchReducer } from './search/searchSlice';
import { filterReducer } from './filter/filterSlice';
import { miniImgApi } from '../redux/miniImgApi/miniImgApi';
import {cardsReducer} from '../redux/cards/cardsSlice';
import {columnsReducer} from '../redux/columns/columnSlice';
import {needHelpReducer} from '../redux/NeedHelp/slice';
import {modalReducer} from '../redux/modal/modalSlice'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    modal: modalReducer,
    boards: boardsReducer,
    cards: cardsReducer,
    columns: columnsReducer,
    theme: themeReducer,
    search: boardSearchReducer,
    filter: filterReducer,
    needHelp: needHelpReducer,
    [miniImgApi.reducerPath]: miniImgApi.reducer,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(miniImgApi.middleware, 

    ),
});

export const persistor = persistStore(store);