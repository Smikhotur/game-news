import { createSlice } from '@reduxjs/toolkit';

const ManagementUiSlice = createSlice({
  name: 'management',
  initialState: {
    openMenu: false,
  },
  reducers: {
    setBurgerMenu: (state) => {
      state.openMenu = !state.openMenu;
    },
  },
});

export const { setBurgerMenu } = ManagementUiSlice.actions;
export default ManagementUiSlice.reducer;
