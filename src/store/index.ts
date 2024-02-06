import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, persistStore } from 'redux-persist';


import { baseQueryApi } from './baseQueryApi';
import { authReducer } from '../features/Auth/slice/authSlice';



const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  [baseQueryApi.reducerPath]: baseQueryApi.reducer,
  // writer: WriterReducer,
  auth: authReducer,
  // cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseQueryApi.middleware),
});

setupListeners(store.dispatch);

const persistor = persistStore(store);

export { persistor, store };
