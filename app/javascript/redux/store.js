import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingsSlice';

const store = configureStore({
    reducer: {
  
      greetings: greetingReducer,
     
    },
  });

export default store;