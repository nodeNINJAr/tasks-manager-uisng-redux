import { baseApi } from './api/baseApi';
import { configureStore } from "@reduxjs/toolkit";
import taskReducer  from "./features/task/taskSlice"
import userReducer from "./features/user/userSlice"


export const store = configureStore({
  reducer: {
    todo: taskReducer,
    user: userReducer,
    [baseApi.reducerPath] : baseApi.reducer,
  },
  
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(baseApi.middleware),
 
})




// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch