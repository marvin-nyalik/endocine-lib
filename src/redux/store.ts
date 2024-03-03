import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
  } from 'react-redux';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
