import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const dataLocation = "http://localhost:3001";

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async ({page = 1, limit = 6, order = 'desc'}, thunkAPI) => {
        try {
            const response = await axios.get(`${dataLocation}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);
            const prevState = thunkAPI.getState().posts
            // library that does deep check to se if objects are equal or nah
            //const equalityCheck = require('deep-equal')

            //      if (JSON.stringify(prevState.articles.items) !== JSON.stringify(response.data))
            // returns false if they aren't equal, need true to run so used the !, this if statement stops the same data from being duplicated as many times as the get is called

            //if (!equalityCheck(prevState.articles.items, response.data)) {
                return {
                    // spread out the values in the previous state array and add the spread new one
                    items: [...prevState.articles.items, ...response.data],
                    page: page,
                    // if the last data has been reached set end to true
                    end: response.data.length === 0
                //}
          //  } else {
               // return {
                    // if the data in state is the same as that been retrieved, then replace state with its original value
               //     items: [...prevState.articles.items]
               // }
            }
        } catch (error) {
            throw error
        }
    }
)

export const getPostsById = createAsyncThunk(
    "posts/getPostsById",
    async (id) => {
        try{
            const response = await axios.get(`${dataLocation}/posts/${id}`);
            return response.data;
        }
        catch (error){
            throw error
        }
    }

)

export const addToNewsletter = createAsyncThunk(
    "users/addToNewsletter",
    async ({email}) => {
        try{
            const findEmailExist = await axios.get(`${dataLocation}/newsletter?email=${email}`)

            if(!Array.isArray(findEmailExist.data) || !findEmailExist.data.length){
                console.log(findEmailExist,'it got past the if')
                const response = await axios ({
                    method:"POST",
                    url:`${dataLocation}/newsletter`,
                    data:{
                        email
                    }
                });
                return{
                    newsletter: 'added',
                    email: response.data
                }
            }
            else{
                return {
                    newsletter: 'failed',
                }
            }
        }
        catch (error){
            throw error
        }
    }

)