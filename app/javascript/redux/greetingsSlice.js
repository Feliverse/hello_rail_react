import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greetings: [],
  loading: false,
  error: '',
};

const url = 'http://127.0.0.1:3000/api/v1/greetings';


export const getGreeting = createAsyncThunk('greeting/fetchgreeting', async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreeting.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGreeting.fulfilled, (state, action) => {
      state.loading = false;
      state.greetings = action.payload;
      state.error = '';
    });
    builder.addCase(getGreeting.rejected, (state, action) => {
      state.loading = false;
      state.greetings = [];
      state.error = action.error.message;
    });
  },
});

export default greetingSlice.reducer;