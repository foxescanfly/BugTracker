import { configureStore } from '@reduxjs/toolkit';
import { bugsReducer } from '../Controllers/Redux/bugsSlice';

export const store = configureStore({
  reducer: {
    bugs: bugsReducer
  },
});
