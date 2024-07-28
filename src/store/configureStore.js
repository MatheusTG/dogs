import { configureStore } from '@reduxjs/toolkit';

const contador = () => 0;

const store = configureStore({
  reducer: { contador },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
