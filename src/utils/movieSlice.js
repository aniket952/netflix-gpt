import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies :null,
        trailerVideo:null,
        popular:null,
        topRated:null,
        upcoming:null
    },
    reducers :{
        addNowPlayingMovie:(state, action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopular:(state, action)=>{
            state.popular = action.payload
        },
        addTopRated:(state, action)=>{
            state.topRated = action.payload
        },
        addUpcoming:(state, action)=>{
            state.upcoming = action.payload
        },
        addTrailerVideo : (state, action)=>{
            state.trailerVideo = action.payload
        }
    }
})

export const {addNowPlayingMovie, addTrailerVideo, addUpcoming, addTopRated, addPopular} = movieSlice.actions;

export default movieSlice.reducer;