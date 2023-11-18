import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gamesReducer from './redusers/GamesSlice';
import { gamesAPI } from '../services/GamesService';

const rootReducer = combineReducers({
  gamesReducer,
  [gamesAPI.reducerPath]: gamesAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(gamesAPI.middleware),
  });
};

export type RootStore = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

// UserSlice.ts => src\store\redusers\GamesSlice.ts
// UserState => GamesState
// count в UserState => itemsPerPage
// userSlice => gamesSlice
// state.userReducer => state.gamesReducer
// user/fetchAll => game/fetchAll
