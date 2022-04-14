import { createSlice } from '@reduxjs/toolkit';

const MessengerSlice = createSlice({
  name: 'messenger',
  initialState: {
    conversation: [],
    users: [],
    messeges: [],
    unread: [],
  },
  reducers: {
    setConversation: (state, actions) => {
      state.conversation = actions.payload;
    },
    setUsers: (state, actions) => {
      state.users = actions.payload;
    },

    setMesseges: (state, actions) => {
      state.messeges = actions.payload;
    },

    setUnread: (state, actions) => {
      state.unread = actions.payload;
    },
  },
});

export const { setConversation, setUsers, setMesseges, setUnread } =
  MessengerSlice.actions;
export default MessengerSlice.reducer;
