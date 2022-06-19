import { createSlice } from "@reduxjs/toolkit";
import bugModel from "../../Models/bugModel";

const initialState = {
    bugsArray:[new bugModel({id: 0,
        _id:0,
        name: "First Bug",
        project:"Bug Tracker App",
        description: "Reboot on Submit",
        priority:"high",
        creator:"John Smith",
        assigned: "Hailey Smith",
        datePosted:"4/4/2022"

    })

    ]
}

const bugsSlice = createSlice({
    name:'bugs',
    initialState,
    reducers:{
        getsBugs:(state)=>{

        },
        addBug: (state, action)=>{
            console.log(action.payload)
            console.log(state.bugsArray)
            const newBug = {
                id: state.bugsArray.length +1,
                ...action.payload
            };
            state.bugsArray.push(newBug)
        }
    }
})

export const bugsReducer = bugsSlice.reducer

export const {addBug} = bugsSlice.actions

export const selectAllBugs=(state)=>{
    return state.bugs.bugsArray
}

export const selectBugById = (id) => (state) => {
    return state.bugs.bugsArray.find(
        (bug) => bug._id === parseInt(id)
    );
};