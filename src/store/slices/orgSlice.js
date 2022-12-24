import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  organization: {},
};

export const orgSlice = createSlice({
  name: "orgSlice",
  initialState,
  reducers: {
    activeOrganization: (state, action) => {
      console.log("in active action: ", action);
      state.organization = action.payload;
    },
    inactiveOrganization: (state) => {
      delete state.organization;
    },
  },
});

// Action creators are generated for each case reducer function
export const { activeOrganization, inactiveOrganization } = orgSlice.actions;
export default orgSlice.reducer;
