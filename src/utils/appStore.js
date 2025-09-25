import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import userClickReducer from "./userClickSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        userClick: userClickReducer
    }
})

export default appStore