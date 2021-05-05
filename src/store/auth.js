import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    authenticateUser: (state, { payload }) => {
      state.isAuthenticated = payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { authenticateUser } = authSlice.actions

export default authSlice.reducer