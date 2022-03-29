import React, { useEffect, useState } from 'react';
import { ChatMenu } from '../../components/ChatMenu/ChatMenu';
import { ChatBox } from '../../components/ChatBox/ChatBox';
import { S } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  getConversationSelector,
  getMessegesSelector,
  getUsersSelector,
} from '../../selectors/selector-messenger';
import {
  getConversationAsync,
  getMessegesAsync,
  getUsersAsync,
} from '../../services/messenger-service';

const Messenger = () => {
  const [currentChat, setCurrentChat] = useState(null);
  const [avatar, setAvatar] = useState('');
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const conversation = useSelector(getConversationSelector);
  const messeges = useSelector(getMessegesSelector);
  const users = useSelector(getUsersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getConversationAsync(currentUser.user.id));
    })();
  }, [currentUser.user.id]);

  useEffect(() => {
    (async () => {
      await dispatch(getUsersAsync());
    })();
  }, []);

  useEffect(() => {
    if (currentChat) {
      (async () => {
        await dispatch(getMessegesAsync(currentChat._id));
      })();
    }
  }, [currentChat]);

  const findConversation = (id, avatar) => {
    setCurrentChat(
      conversation.find((el) => el.members.find((idChat) => idChat === id))
    );
    setAvatar(avatar);
  };

  return (
    <S.Container>
      <S.WrapperMessenger>
        <ChatMenu
          conversation={conversation}
          users={users}
          currentUser={currentUser.user.id}
          findConversation={findConversation}
        />
        <ChatBox
          currentChat={currentChat}
          messeges={messeges}
          avatar={avatar}
          currentUser={currentUser}
        />
      </S.WrapperMessenger>
    </S.Container>
  );
};

export default Messenger;
