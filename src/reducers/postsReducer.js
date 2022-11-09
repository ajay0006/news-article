import { createSlice} from "@reduxjs/toolkit";
import {getPosts, getPostsById} from "./thunk";

/* Your store has your reducers, your reducers has your state and actions, and these actions are what you use to interact with the state
 big question you might be wondering is why didn't I jst put the thunk here, well I wanted to keep things separate */


// your slice aka the combo of reducers, state and actions
export const postsSlice = createSlice({
    // this name must match the name in your thunks
    name: 'posts',
    initialState:{
        loading: true,
        articles:{
            // all articles are saved here after the get
            page: '',
            items: []
        },
        // each article is placed here after the get by ID
        article: {}
    },
    // this reducer is for actions that are not async
    reducers:{
        clearArticleState: (state) => {
            state.article = {}
        }

    },
    // this reducer is for the actions that are async, actions that need an await, getting data from url's fit the bill
    // note that the pending and failed aren't compulsory
    extraReducers:(builder)=>{
        // basically a switch case with no break and default
        builder
            // when the get is pending what would you like done, you only have access to the state here
            .addCase(getPosts.pending, (state) => {
                state.loading = true
            })
            // when the get request has been fulfilled, we do have access to the state and the result of the actions,
            // set state loading to false, and save the results in state
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false
                state.articles = action.payload

            })
            // when the get request fails, we do have access to the state and no action result, because it failed,
            // set state loading to true, and save the results in state
            .addCase(getPosts.rejected, (state) => {
                state.loading = false

            })
            // when the get is pending what would you like done, you only have access to the state here
            .addCase(getPostsById.pending, (state) => {
                state.loading = true
            })
            // when the get request has been fulfilled, we do have access to the state and the result of the actions,
            // set state loading to false, and save the results in state
            .addCase(getPostsById.fulfilled, (state, action) => {
                state.loading = false
                state.article = action.payload

            })
            .addCase(getPostsById.rejected, (state) => {
                state.loading = false

            })
    }
})

export const { clearArticleState } = postsSlice.actions
export default postsSlice.reducer