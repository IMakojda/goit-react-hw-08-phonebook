import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./AuthOperation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isCurrentUserRefresh: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.refreshUser.pending](state) {
      state.isCurrentUserRefresh = true;
    },

    [authOperations.refreshUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isCurrentUserRefresh = false;
    },

    [authOperations.refreshUser.rejected](state, action) {
      state.isCurrentUserRefresh = false;
    },


  },
})

export default authSlice.reducer;