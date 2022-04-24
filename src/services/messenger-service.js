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
  async (data) => {
    try {
      const res = await service.post(API.conversations, data);

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

export const postMessegesAsync = createAsyncThunk(
  MESSENGER_TYPES_PREFIX.createMessegesPrefix,
  async (data) => {
    try {
      const res = await service.post(API.messages, data);
      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);

export const deleteMessageAsync = createAsyncThunk(
  MESSENGER_TYPES_PREFIX.deleteMessagePrefix,
  async (data) => {
    try {
      const res = await service.delete(`${API.messages}/${data}`);
      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);

export const sendErrorMessageAsync = createAsyncThunk(
  MESSENGER_TYPES_PREFIX.deleteMessagePrefix,
  async (data) => {
    try {
      const res = await service.get(`${API.errorMessage}/${data}`);
      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);

export const searchUserAsync = createAsyncThunk(
  MESSENGER_TYPES_PREFIX.searchUserPrefix,
  async (data, { dispatch }) => {
    try {
      const res = await service.post(API.userSearch, data);
      dispatch(setUsers(res.data));
      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);

export const editMessageAsync = createAsyncThunk(
  MESSENGER_TYPES_PREFIX.editMessagePrefix,
  async (data, { dispatch }) => {
    try {
      const res = await service.patch(
        `${API.upDateMessages}/${data.id}/${data.conversationId}`,
        data.param
      );
      dispatch(setMesseges(res.data));
      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);
