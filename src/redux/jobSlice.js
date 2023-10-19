import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainJobs: [],
  jobs: [],
  initialized: false, //* veriler yüklendi mi
  isError: false,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.jobs = action.payload;
      state.mainJobs = action.payload;
      state.initialized = true;
      state.isError = false;
    },
    setError: (state) => {
      state.isError = true;
      state.initialized = true;
    },
    filterBySearch: (state, action) => {
      //* Arama terimini küçük harfe çevirme
      const query = action.payload.toLowerCase();
      //* arama terimini içeren işleri filtreleme
      const filter = state.mainJobs.filter((job) =>
        job.company.toLowerCase().includes(query)
      );
      //* state'i güncelleme
      state.jobs = filter;
    },
    filterByStatus: (state, action) => {
      const filtred = state.mainJobs.filter(
        (job) => job.status === action.payload
      );
      state.jobs = filtred;
    },
    filterByType: (state, action) => {
      const filtred = state.mainJobs.filter(
        (job) => job.type === action.payload
      );
      state.jobs = filtred;
    },
    sortJob: (state, action) => {
      switch (action.payload) {
        case "a-z":
          // a-z ye sıralama
          state.jobs.sort((a, b) => a.company.localeCompare(b.company));
          break;
        case "z-a":
          // z-a ya sıralama
          state.jobs.sort((a, b) => b.company.localeCompare(a.company));
          break;
        case "New":
          state.jobs.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case "Old":
          state.jobs.sort((a, b) => new Date(a.date) - new Date(b.date));
          break;

        default:
          break;
      }
    },
    clearFilter: (state) => {
      state.jobs = state.mainJobs;
    },
  },
});

// Aksiyonları export etme
export const {
  setJob,
  setError,
  filterBySearch,
  filterByStatus,
  filterByType,
  sortJob,
  clearFilter,
} = jobSlice.actions;

// createSlice'ın oluşturduğu reducer'ı export etme
export default jobSlice.reducer;
