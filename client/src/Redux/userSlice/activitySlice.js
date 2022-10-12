import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

               // get the list of activities

export const getActivity = createAsyncThunk("getActivity/",async () => {
    try {
        let response = await axios.get("http://localhost:5000/activities/activity");
    return await response.data;
    
    } catch (error) {
        console.log(error)
    }
});

                 // add a new activities

export const postActivity = createAsyncThunk("Activity/",async () => {
    try {
        let response = await axios.post("http://localhost:5000/activities/activity/add");
    return await response;
    
    } catch (error) {
        console.log(error)
    }
});

                  // update an activity

export const updateActivity = createAsyncThunk("Activity/",async (id) => {
    try {
        let response = await axios.put(`http://localhost:5000/activities/activity/update/${id}`);
    return await response;
    
    } catch (error) {
        console.log(error)
    }
});

                   // delete an activity

export const deleteActivity = createAsyncThunk("Activity/",async (id) => {
    try {
        let response = await axios.get(`http://localhost:5000/activities/activity/delete/${id}`);
    return await response;
    
    } catch (error) {
        console.log(error)
    }
});

const initialState = {
    Activity:null,
    status:null
   }
   
   export const ActivitySlice = createSlice({
     name: 'Activity',
     initialState,
     reducers: {},
     extraReducers:{

               // get extrareducers

       [getActivity.pending]: (state)=> {
           state.status = "pending";
       },
       [getActivity.fulfilled]: (state,action)=> {
           state.status = "successful";
           state.Activity = action.payload;
       },
       [getActivity.rejected]: (state)=> {
           state.status = "failed";
       },

               // add extrareducers

       [postActivity.pending]: (state)=> {
        state.status = "pending";
       },
       [postActivity.fulfilled]: (state,action)=> {
        state.status = "successful";
       },
       [postActivity.rejected]: (state)=> {
        state.status = "failed";
       },

       // update extrareducers

       [updateActivity.pending]: (state)=> {
        state.status = "pending";
       },
       [updateActivity.fulfilled]: (state,action)=> {
        state.status = "successful";
       },
       [updateActivity.rejected]: (state)=> {
        state.status = "failed";
       },

       // delete extrareducers

       [deleteActivity.pending]: (state)=> {
        state.status = "pending";
       },
       [deleteActivity.fulfilled]: (state,action)=> {
        state.status = "successful";
       },
       [deleteActivity.rejected]: (state)=> {
        state.status = "failed";
       },

}})
       export default ActivitySlice.reducer