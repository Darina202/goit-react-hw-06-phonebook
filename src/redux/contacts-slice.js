import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        return [...state, payload];
      },
      prepare: data => {
        return { payload: { id: nanoid(), ...data } };
      },
    },
    deleteContact: (state, { payload }) => {
      return state.filter(item => item.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
