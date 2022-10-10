import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getEvent = createAsyncThunk("Event/",async () => {
    try {
        let response = await axios.get("http://localhost:5000/events");
    return await response;
    
    } catch (error) {
        console.log(error)
    }
});

const initialState = {
    Event:null,
    status:null
   }
   
   export const EventSlice = createSlice({
     name: 'Event',
     initialState,
     reducers: {},
     extraReducers:{
       [getEvent.pending]: (state)=> {
           state.status = "pending";
       },
       [getEvent.fulfilled]: (state,action)=> {
           state.status = "successful";
           state.Event = action.payload.data.Event;
       },
       [getEvent.rejected]: (state)=> {
           state.status = "failed";
       },}})

       export default EventSlice.reducer