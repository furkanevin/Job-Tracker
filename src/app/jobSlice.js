import { createSlice } from '@reduxjs/toolkit';

const initialFiltersState = {
  query: '',
  status: '',
  type: '',
  sort: 'En Son',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  jobs: [],
  filtredJobs: [],
  initialized: false,
  ...initialFiltersState,
};

const jobSlice = createSlice({
  name: 'jobSlice',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
      state.filtredJobs = action.payload;
      state.initialized = true;
    },

    addJob: (state, action) => {
      state.jobs.push(action.payload);
      state.initialized = true;
    },

    handleChange: (state, action) => {
      state[action.payload.name] = action.payload.value;

      // Inputa göre fitreleme
      const filtred = state.jobs.filter((job) => {
        const selectedJob = job.company.toLowerCase();
        const query = state.query.toLowerCase();

        return selectedJob.includes(query);
      });
      state.filtredJobs = filtred;

      // duruma göre fitreleme
      const filterByStatus = state.filtredJobs.filter(
        (job) => job.status === state.status
      );

      state.filtredJobs = filterByStatus;

      // türe göre fitreleme
      // const filterByType = state.filtredJobs.filter(
      //   (job) => job.type === state.type
      // );

      // state.filtredJobs = filterByType;
    },
  },
});

export const { setJobs, addJob, handleChange } = jobSlice.actions;
export default jobSlice.reducer;
