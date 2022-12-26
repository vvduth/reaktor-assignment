import { configureStore, createSlice } from "@reduxjs/toolkit";
import { DRONE_URL } from "../service";
import dronesReducer from "./dronesSlice";

export const store = configureStore({
    reducer: {
        drones: dronesReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch