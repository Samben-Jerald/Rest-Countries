import { createSlice , configureStore} from "@reduxjs/toolkit";

const DarkModeSlice = createSlice({
  name: "darkMode",
  initialState: { darstateMode: false },
  reducers: {
    toogleMode: (state,action) => {
      state.darstateMode = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    darkmode: DarkModeSlice.reducer,
  },
});

export const darkModeActions = DarkModeSlice.actions;
export default store;
