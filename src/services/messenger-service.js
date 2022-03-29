import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../CONST/api-endpoints';
import { MESSENGER_TYPES_PREFIX } from '../CONST/types-prefix/types-messenger';
import {
  setConversation,
  setMesseges,
  setUsers,
} from '../redux-slices/messenger-slice';
import service from './service';

export const postConversationAsync = createAsyncThunk(
  MESSENGER_TYPES_PREFIX.conversationPrefix,
  async (data, { dispatch }) => {
    try {
      const res = await service.post(API.conversations, data);
      dispatch(setConversation(res.data));
      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);

export const getConversationAsync = createAsyncThunk(
  MESSENGER_TYPES_PREFIX.getConversationPrefix,
  async (data, { dispatch }) => {
    try {
      const res = await service.get(`${API.conversations}/${data}`);
      dispatch(setConversation(res.data));
      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);

export const getUsersAsync = createAsyncThunk(
  MESSENGER_TYPES_PREFIX.usersPrefix,
  async (data, { dispatch }) => {
    try {
      const res = await service.get(`${API.users}/all`);
      dispatch(setUsers(res.data));
      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);

export const getMessegesAsync = createAsyncThunk(
  MESSENGER_TYPES_PREFIX.getMessegesPrefix,
  async (data, { dispatch }) => {
    try {
      const res = await service.get(`${API.messages}/${data}`);
      dispatch(setMesseges(res.data));
      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);
