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
  postConversationAsync,
} from '../../services/messenger-service';
// import { useRouteMatch } from 'react-router-dom';

const Messenger = ({ socket }) => {
  const [currentChat, setCurrentChat] = useState(null);
  // const [onlineUsers, setOnlineUsers] = useState(null);
  const [receiverId, setReceiverId] = useState(null);
  const [avatar, setAvatar] = useState('');
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const conversation = useSelector(getConversationSelector);
  const messeges = useSelector(getMessegesSelector);
  const users = useSelector(getUsersSelector);
  // const { params } = useRouteMatch();
  const dispatch = useDispatch();

  const findConversation = (id) => {
    setCurrentChat(
      conversation?.find((el) => el.members.find((idChat) => idChat === id))
    );
  };

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
        console.log('currentChat._id', currentChat._id);
        await dispatch(getMessegesAsync(currentChat._id));
      })();
    }

    if (currentChat === undefined) {
      (async () => {
        const res = await dispatch(
          postConversationAsync({
            senderId: currentUser.user.id,
            receiverId,
          })
        );
        setCurrentChat(res.payload);
      })();
    }
  }, [currentChat]);

  // useEffect(() => {
  //   if (params?.receiverId) {
  //     findConversation(params?.receiverId);
  //   }
  // }, [conversation]);

  return (
    <S.Container>
      <S.WrapperMessenger>
        <ChatMenu
          conversation={conversation}
          users={users}
          currentUser={currentUser.user.id}
          setReceiverId={setReceiverId}
          setAvatar={setAvatar}
          findConversation={findConversation}
        />
        <ChatBox
          currentChat={currentChat}
          messeges={messeges}
          avatar={avatar}
          socket={socket}
        />
      </S.WrapperMessenger>
    </S.Container>
  );
};

export default Messenger;
