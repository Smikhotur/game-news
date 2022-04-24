/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Emoji } from '../Emoji/Emoji';
import { S } from './styles';
import emoji from '../../assets/images/emoji.png';
import { HTTP_REQUEST_STATUS } from '../../CONST/http-request-status';
import { useDispatch } from 'react-redux';
import {
  deleteMessageAsync,
  editMessageAsync,
  postMessegesAsync,
} from '../../services/messenger-service';
import { setMesseges, setUnread } from '../../redux-slices/messenger-slice';
import { setOnlineUsers } from '../../redux-slices/management-ui-slice';
import useOnOutsideClick from '../../custom-hooks/useOnOutsideClick';
import { MessageList } from './MessageList/MessageList';
import { ROUTE_MESSENGER } from '../../CONST/list-local-routs/list-routes-public';
import { useRouteMatch } from 'react-router-dom';
import { cloneObject } from '../../helpers/getAuthUser';
// import { io } from 'socket.io-client';

export const ChatBox = ({ currentChat, messeges, avatar, socket }) => {
  const { t } = useTranslation(['common']);
  const [text, setText] = useState('');
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const [openEmoji, setOpenEmoji] = useState(false);
  const dispatch = useDispatch();
  const { innerBorderRef } = useOnOutsideClick(() => setOpenEmoji(false));
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [editMessageSocet, setEditMessageSocet] = useState(null);
  const { path } = useRouteMatch();
  const [edit, setEdit] = useState('');
  const [removeMessageId, setRemoveMessageId] = useState(null);

  if (path.match(ROUTE_MESSENGER.path)) {
    useEffect(() => {
      dispatch(setUnread([]));
      socket.current?.on('getMessage', (data) => {
        setArrivalMessage({
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
          _id: Date.now(),
        });
      });

      socket.current?.on('getEditMessage', (data) => {
        setEditMessageSocet({
          messageId: data.messageId,
          text: data.text,
        });
      });

      socket.current?.on('deleteMessage', (data) => {
        setRemoveMessageId(data.messageId);
      });

      socket.current?.on('getUsers', (users) => {
        dispatch(setOnlineUsers(users));
      });

      return () => {
        socket.current?.off();
      };
    }, []);
  }

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      dispatch(setMesseges([...messeges, arrivalMessage]));
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit('addUser', currentUser.user.id);
    socket.current.on('getUsers', (users) => {
      dispatch(setOnlineUsers(users));
    });
  }, []);

  useEffect(() => {
    if (editMessageSocet) {
      const clone = cloneObject(messeges);
      clone.forEach((sms) => {
        if (sms._id === editMessageSocet.messageId)
          sms.text = editMessageSocet.text;
      });

      dispatch(setMesseges(clone));
    }
  }, [editMessageSocet]);

  useEffect(() => {
    if (removeMessageId) {
      const newMessage = messeges.filter((sms) => {
        return sms._id !== removeMessageId;
      });

      console.log(removeMessageId);
      console.log(messeges);

      dispatch(setMesseges(newMessage));
    }
  }, [removeMessageId]);

  const sendMessage = async () => {
    const message = {
      sender: currentUser?.user.id,
      text: text,
      conversationId: currentChat,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== currentUser.user.id
    );

    socket.current.emit('sendMessage', {
      senderId: currentUser.user.id,
      receiverId,
      text,
      avatar: currentUser.user.avatar,
    });

    const respons = await dispatch(postMessegesAsync(message));

    if (respons.meta.requestStatus === HTTP_REQUEST_STATUS.FULFILLED) {
      dispatch(setMesseges([...messeges, respons.payload]));
      setText('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    edit ? editMessage() : sendMessage();
  };

  const editMessage = () => {
    dispatch(
      editMessageAsync({
        conversationId: currentChat._id,
        id: edit,
        param: { text: text },
      })
    );

    const receiverId = currentChat.members.find(
      (member) => member !== currentUser.user.id
    );

    socket.current.emit('sendEditMessage', {
      receiverId,
      text,
      messageId: edit,
    });

    setText('');
    setEdit('');
  };

  const createMesseg = ({ target: { value } }) => {
    setText(value);
  };

  const handleChange = () => {
    setOpenEmoji(!openEmoji);
  };

  const handleKeyUp = ({ key }) => {
    if (key === 'Enter') {
      edit ? editMessage() : sendMessage();
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messeges]);

  const updateMessage = (sms, id) => {
    setText(sms);
    setEdit(id);
  };

  const removeMessage = async (smsId) => {
    const res = await dispatch(deleteMessageAsync(smsId));

    if (res.meta.requestStatus === HTTP_REQUEST_STATUS.FULFILLED) {
      dispatch(
        setMesseges(messeges.filter((message) => message._id !== smsId))
      );
    }

    const receiverId = currentChat.members.find(
      (member) => member !== currentUser.user.id
    );

    console.log(receiverId);
    console.log(smsId);

    socket.current.emit('deleteMessageSocket', {
      messageId: smsId,
      receiverId,
    });
  };

  return (
    <S.ChatBox>
      <S.Title>{t('messenger')}</S.Title>
      {currentChat ? (
        <>
          <S.ChatInner>
            <MessageList
              messeges={messeges}
              avatar={avatar}
              scrollRef={scrollRef}
              updateMessage={updateMessage}
              removeMessage={removeMessage}
            />
          </S.ChatInner>
          <S.InnerTitle onSubmit={handleSubmit}>
            <S.Text
              onChange={createMesseg}
              onKeyUp={handleKeyUp}
              value={text}
              placeholder={t('write_comments')}
            />
            <img onClick={handleChange} title="Emoji" src={emoji} alt="" />
            <Emoji
              innerBorderRef={innerBorderRef}
              setText={setText}
              openEmoji={openEmoji}
              position={{
                right: '138px',
                top: '-118px',
              }}
            />
            <S.Button type="submmit">{edit ? 'Edit' : 'Send'}</S.Button>
          </S.InnerTitle>
        </>
      ) : (
        <S.ChatInnerNull>{t('chat')}</S.ChatInnerNull>
      )}
    </S.ChatBox>
  );
};
