import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  _id: "",
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      state._id = action.payload.data._id;
      state.firstName = action.payload.data.firstName;
      state.lastName = action.payload.data.lastName;
      state.email = action.payload.data.email;
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { loginRedux, logoutRedux, setUsers } = userSlice.actions;
export default userSlice.reducer;
