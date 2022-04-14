import { createSlice } from '@reduxjs/toolkit';

const ManagementUiSlice = createSlice({
  name: 'management',
  initialState: {
    openMenu: false,
    onlineUsers: null,
  },
  reducers: {
    setBurgerMenu: (state) => {
      state.openMenu = !state.openMenu;
    },

    setOnlineUsers: (state, actions) => {
      state.onlineUsers = actions.payload;
    },
  },
});

export const { setBurgerMenu, setOnlineUsers } = ManagementUiSlice.actions;
export default ManagementUiSlice.reducer;
