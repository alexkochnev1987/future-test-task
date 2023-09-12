import { configureStore } from '@reduxjs/toolkit';
import library from '../../../pages/library/model/slice/library-slice';

const store = configureStore({
  reducer: { library },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
