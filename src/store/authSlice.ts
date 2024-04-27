import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: {},
  },
  reducers: {
    addUserData(state, action) {
      state.userData = {
        ...action.payload,
      };
    },
    removeUserData(state, action) {
        state.userData = {
            ...action.payload
        }
    },
  },
});

export const { addUserData, removeUserData } = authSlice.actions;
export default authSlice.reducer;
