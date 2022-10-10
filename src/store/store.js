import { configureStore} from "@reduxjs/toolkit";
import postsReducer from "../reducers/postsReducer";
import usersReducers from "../reducers/usersReducers";


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducers

    }
})