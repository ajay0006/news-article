import { createSlice} from "@reduxjs/toolkit";
import { addToNewsletter} from "./thunk";

export const usersSlice = createSlice({
    name: 'users',
    initialState:{
        actions: {}
    },
    reducers:{
        clearActionsState: (state) => {
            state.actions = {}
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(addToNewsletter.fulfilled, (state, action) =>{
                state.action = action.payload
            })

    }
})

export const { clearActionsState } = usersSlice.actions
export default usersSlice.reducer