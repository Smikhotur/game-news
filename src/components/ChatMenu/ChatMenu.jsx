import React from 'react';
import { useTranslation } from 'react-i18next';
import { S } from './styles';
import userImg from '../../assets/images/user1.png';

export const ChatMenu = ({ users, currentUser, findConversation }) => {
  const { t } = useTranslation(['common']);

  return (
    <S.ChatMenu>
      <S.SearchPeople placeholder={t('search')} type="text" />
      <S.UsersList>
        {users.map((user) => {
          return user.id !== currentUser ? (
            <S.UsersItem
              onClick={() => findConversation(user.id, user.avatar)}
              key={user.id}
            >
              <img src={user?.avatar ? user?.avatar : userImg} alt="" />
              <S.UserName>{user?.firstName + ' ' + user?.lastName}</S.UserName>
            </S.UsersItem>
          ) : null;
        })}
      </S.UsersList>
    </S.ChatMenu>
  );
};
