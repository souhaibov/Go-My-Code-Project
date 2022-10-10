import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// register connection 
export const userRegister = createAsyncThunk("user/register",async (user) => {
    try {
        let response = await axios.post("http://localhost:5000/user/register", user);
    return await response;
    
    } catch (error) {
        console.log(error)
    }
});
// login connection
export const userLogin  = createAsyncThunk("user/login",async (user) => {
    try {
        let response = await axios.post("http://localhost:5000/user/login", user);
    return await response;
    
    
    } catch (error) {
        console.log(error)
    }
});
// current user
export const userCurrent = createAsyncThunk("user/current",async () => {
    try {
        let response = await axios.get("http://localhost:5000/user/current",{
            headers: { 
                Authorization: localStorage.getItem("token")
                     },
        });
    return await response;
    
    } catch (error) {
        console.log(error)
    }
});



const initialState = {
 user:null,
 status:null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers:{
    [userRegister.pending]: (state)=> {
        state.status = "pending";
    },
    [userRegister.fulfilled]: (state,action)=> {
        state.status = "successful";
        state.user = action.payload.data.newUserToken;
        localStorage.setItem("token", action.payload.data.token);
    },
    [userRegister.rejected]: (state)=> {
        state.status = "failed";
    },
    
    [userLogin.pending]: (state)=> {
        state.status = "pending";
    },
    [userLogin.fulfilled]: (state,action)=> {
        state.status = "successful";
        state.user = action.payload.data.user;
        localStorage.setItem("token", action.payload.data.token);
    },
    [userLogin.rejected]: (state)=> {
        state.status = "failed";
    },
    [userCurrent.pending]: (state)=> {
        state.status = "pending";
    },
    [userCurrent.fulfilled]: (state,action)=> {
        state.status = "successful";
        state.user = action.payload.data.user;
    },
    [userCurrent.rejected]: (state)=> {
        state.status = "failed";
    },
  },
  
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer