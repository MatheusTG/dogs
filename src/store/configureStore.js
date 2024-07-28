import { configureStore } from '@reduxjs/toolkit';
import photo from './photo';

const store = configureStore({
  reducer: { photo },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
