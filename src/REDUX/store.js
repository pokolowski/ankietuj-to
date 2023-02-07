import { createSlice, configureStore } from '@reduxjs/toolkit';

export const APISlice = createSlice({
  name: 'APIdata',
  initialState: [],
  reducers: {
    setData: (state, action) => {
      state = {
        surveys: [...action.payload.data],
      };
      return state;
    },
  },
});

export const { setData } = APISlice.actions;

export const store = configureStore({
  reducer: {
    data: APISlice.reducer,
  },
});
