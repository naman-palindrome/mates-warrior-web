import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '../firebase'


export const userLogin = createAsyncThunk(
  'auth/userLogin',
  async (payload) => {
    console.log(payload);
    const response = await auth.signInWithPhoneNumber(payload);
    return response.data;
  },
);


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurUser: (state, { payload }) => {
      state.currentUser = payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCurUser } = authSlice.actions

export default authSlice.reducer