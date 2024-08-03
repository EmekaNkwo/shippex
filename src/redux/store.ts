import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { shipmentApi } from "./api/shipmentApi";
import { authApi } from "./api/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [shipmentApi.reducerPath]: shipmentApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([shipmentApi.middleware, authApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
