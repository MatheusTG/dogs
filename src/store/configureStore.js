import { configureStore } from '@reduxjs/toolkit';
import photo from './photo';
import token from './token';
import user from './user';
import feed from './feed';

const store = configureStore({
  reducer: { photo, token, user, feed },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
