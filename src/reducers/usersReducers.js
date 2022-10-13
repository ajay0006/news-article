import { createSlice} from "@reduxjs/toolkit";
import { addToNewsletter} from "./thunk";

export const usersSlice = createSlice({
    name: 'users',
    initialState:{
        actions: {}
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(addToNewsletter.fulfilled, (state, action) =>{
                state.action = action.payload
            })

    }
})


export default usersSlice.reducer