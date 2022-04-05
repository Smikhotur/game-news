/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Emoji } from '../Emoji/Emoji';
import { S } from './styles';
import emoji from '../../assets/images/emoji.png';
import { HTTP_REQUEST_STATUS } from '../../CONST/http-request-status';
import { useDispatch } from 'react-redux';
import { postMessegesAsync } from '../../services/messenger-service';
import { setMesseges } from '../../redux-slices/messenger-slice';
import useOnOutsideClick from '../../custom-hooks/useOnOutsideClick';
import { MessageList } from './MessageList/MessageList';
import { io } from 'socket.io-client';

export const ChatBox = ({ currentChat, messeges, avatar }) => {
  const { t } = useTranslation(['common']);
  const [text, setText] = useState('');
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const [openEmoji, setOpenEmoji] = useState(false);
  const dispatch = useDispatch();
  const { innerBorderRef } = useOnOutsideClick(() => setOpenEmoji(false));
  const scrollRef = useRef();
  const socket = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.current = io('ws://localhost:8900');
    socket.current.on('getMessage', (data) => {
      setArrivalMessage({
        sender: data.sender,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMesseges([...messeges, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit('addUser', currentUser.user.id);
    socket.current.on('getUsers', (users) => {
      console.log(users);
    });
  }, [currentUser.user]);

  // console.log(currentUser.user);

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
    });

    const respons = await dispatch(postMessegesAsync(message));

    if (respons.meta.requestStatus === HTTP_REQUEST_STATUS.FULFILLED) {
      dispatch(setMesseges([...messeges, respons.payload]));
      setText('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const createMesseg = ({ target: { value } }) => {
    setText(value);
  };

  const handleChange = () => {
    setOpenEmoji(!openEmoji);
  };

  const handleKeyUp = ({ key }) => {
    if (key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messeges]);

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
            <S.Button type="submmit">Send</S.Button>
          </S.InnerTitle>
        </>
      ) : (
        <S.ChatInnerNull>{t('chat')}</S.ChatInnerNull>
      )}
    </S.ChatBox>
  );
};
