export const getConversationSelector = (state) => {
  return state.messenger.conversation;
};

export const getUsersSelector = (state) => {
  return state.messenger.users;
};

export const getMessegesSelector = (state) => {
  return state.messenger.messeges;
};

export const getUnreadSelector = (state) => {
  return state.messenger.unread;
};
