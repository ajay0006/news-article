import { createSlice} from "@reduxjs/toolkit";
import {getPosts} from "./thunk";

export const postsSlice = createSlice({
    name: 'posts',
    initialState:{
        loading: true,
        articles:{
            items: []
        }
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
    }
})


export default postsSlice.reducer