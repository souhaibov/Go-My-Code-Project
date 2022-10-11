import { configureStore } from '@reduxjs/toolkit'
import activitySlice from './userSlice/activitySlice'
import eventSlice from './userSlice/eventSlice'
import userSlice from './userSlice/userSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    event:eventSlice,
    activity:activitySlice
    // coach:coachSlice,
  },
})