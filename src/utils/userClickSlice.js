import { createSlice } from "@reduxjs/toolkit";

const userClickSlice = createSlice({
    name: "userClick",
    initialState :{
        gptSearch : false,
        language:"en"
    },
    reducers :{
        addGptSearch:(state, action)=>{
            state.gptSearch = action.payload
        },
        addLang:(state, action)=>{
            state.language = action.payload
        }
    }
})

export const {addGptSearch,addLang} = userClickSlice.actions

export default userClickSlice.reducer