import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { appApi } from "./api/appApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  [appApi.reducerPath]: appApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([appApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
