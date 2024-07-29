import { configureStore } from '@reduxjs/toolkit';
import photo from './photo';
import token from './token';
import user from './user';
import feed from './feed';
import ui from './ui';

const store = configureStore({
  reducer: { photo, token, user, feed, ui },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
