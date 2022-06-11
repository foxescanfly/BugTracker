import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bugsArray:[]
}

const bugsSlice = createSlice({
    name:'bugs',
    initialState
})

export const bugsReducer = bugsSlice.reducer