import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/slice";
import Logger from "./middleware/Logger";
export const store = configureStore({
  reducer: {
    todosss: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
