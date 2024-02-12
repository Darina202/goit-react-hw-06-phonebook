import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFitler: (state, { payload }) => payload,
  },
});

export const { changeFitler } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
