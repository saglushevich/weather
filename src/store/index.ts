import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import createSagaMiddleware from "redux-saga";
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
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";

import rootWatcher from "./saga";
import rootReducer from "./slices/index";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer)
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootWatcher);

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export const useCustomDispatch: () => AppDispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<rootState> = useSelector;

export default store;
