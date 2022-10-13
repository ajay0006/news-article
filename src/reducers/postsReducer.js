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
                console.log(action.payload.id, 'what is being saved in state')
                state.article = action.payload

            })
            .addCase(getPostsById.rejected, (state) => {
                state.loading = true

            })
    }
})


export default postsSlice.reducer