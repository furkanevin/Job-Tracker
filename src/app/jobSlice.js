import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  initialized: false,
};

const jobSlice = createSlice({
  name: 'jobSlice',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
      state.initialized = true;
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
      state.initialized = true;
    },
  },
});

export const { setJobs, addJob } = jobSlice.actions;
export default jobSlice.reducer;
