import { createSlice} from "@reduxjs/toolkit";
import {getPosts, getPostsById} from "./thunk";

export const postsSlice = createSlice({
    name: 'posts',
    initialState:{
        loading: true,
        articles:{
            items: []
        },
        article: {}
    },
    reducers:{
        clearArticleState: (state) =>{
            state.article = {}
        }

    },
    extraReducers:(builder)=>{
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false
                state.articles = action.payload

            })
            .addCase(getPosts.rejected, (state) => {
                state.loading = true

            })
            .addCase(getPostsById.pending, (state) => {
                state.loading = true
            })
            .addCase(getPostsById.fulfilled, (state, action) => {
                state.loading = false
                state.article = action.payload

            })
            .addCase(getPostsById.rejected, (state) => {
                state.loading = true

            })
    }
})

export const { clearArticleState } = postsSlice.actions
export default postsSlice.reducer