import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gamesReducer from './redusers/GamesSlice';

const rootReducer = combineReducers({
  gamesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
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
