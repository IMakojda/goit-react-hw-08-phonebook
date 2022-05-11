import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthReducer from "./AuthReducer/AuthSlice";
import { contactApi } from "./ContactsReduser/ContactsSliceApi";
import filterReduser from "./FilterReduser/FilterSlice";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, AuthReducer),
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReduser,
  },
  middleware: (getDefaultMiddleware) => [
    contactApi.middleware,
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  ],
  devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store);