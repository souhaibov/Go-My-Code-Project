import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getEvent = createAsyncThunk("getEvent/", async () => {
  try {
    let response = await axios.get("http://localhost:5000/events");
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});

// add a new activity

export const postEvent = createAsyncThunk("Event/", async (Event) => {
  try {
    let response = await axios.post("http://localhost:5000/events/add",Event);
    return await response;
  } catch (error) {
    console.log(error);
  }
});

// update an Event

export const updateEvent = createAsyncThunk("Event/", async (id) => {
  try {
    let response = await axios.put(`http://localhost:5000/events/update${id}`);
    return await response;
  } catch (error) {
    console.log(error);
  }
});

// delete an Event

export const deleteEvent = createAsyncThunk("Event/", async (id) => {
  try {
    let response = await axios.get(`http://localhost:5000/events/delete/${id}`);
    return await response;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  Event: null,
  status: null,
};

export const EventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {},
  extraReducers: {

    // get Event extrareducers

    [getEvent.pending]: (state) => {
      state.status = "pending";
    },
    [getEvent.fulfilled]: (state, action) => {
      state.status = "successful";
      state.Event = action.payload;
    },
    [getEvent.rejected]: (state) => {
      state.status = "failed";
    },

    // add extrareducers

    [postEvent.pending]: (state) => {
      state.status = "pending";
    },
    [postEvent.fulfilled]: (state, action) => {
      state.status = "successful";
    },
    [postEvent.rejected]: (state) => {
      state.status = "failed";
    },

    // update extrareducers

    [updateEvent.pending]: (state) => {
      state.status = "pending";
    },
    [updateEvent.fulfilled]: (state, action) => {
      state.status = "successful";
    },
    [updateEvent.rejected]: (state) => {
      state.status = "failed";
    },

    // delete extrareducers

    [deleteEvent.pending]: (state) => {
      state.status = "pending";
    },
    [deleteEvent.fulfilled]: (state, action) => {
      state.status = "successful";
    },
    [deleteEvent.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default EventSlice.reducer;
