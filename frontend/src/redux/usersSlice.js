import { createSlice } from "@reduxjs/toolkit";
//import { toast } from "react-hot-toast";

const initialState = {
  userList: [],
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    adminUser: (state, action) => {
      console.log(action);
      state.userList = [...action.payload];
    },
  },
});
export const { adminUser } = usersSlice.actions;
export default usersSlice.reducer;
