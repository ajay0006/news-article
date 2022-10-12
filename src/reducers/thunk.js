import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const dataLocation = "http://localhost:3001";

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async ({page = 1, limit = 6, order = 'desc'}, thunkAPI) => {
        try {
            const response = await axios.get(`${dataLocation}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);
            const prevState = thunkAPI.getState().posts
            const equalityCheck = require('deep-equal')

            //      if (JSON.stringify(prevState.articles.items) !== JSON.stringify(response.data))

            if (!equalityCheck(prevState.articles.items, response.data)) {
                return {
                    items: [...prevState.articles.items, ...response.data],
                    page: page
                }
            } else {
                return {
                    items: [...prevState.articles.items]
                }
            }
        } catch (error) {
            throw error
        }
    }
)