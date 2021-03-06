import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { S } from './styles';
import userImg from '../../assets/images/user1.png';
import { getOnlineUsersSelector } from '../../selectors/selector-management';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTE_MESSENGER } from '../../CONST/list-local-routs/list-routes-public';
import { useRouteMatch } from 'react-router-dom';
import { colors } from '../../CONST/colors';
import { searchUserAsync } from '../../services/messenger-service';

export const ChatMenu = ({
  users,
  currentUser,
  setReceiverId,
  setAvatar,
  findConversation,
}) => {
  const [searchText, setSearchText] = useState('');
  const { t } = useTranslation(['common']);
  const [open, setOpen] = useState(false);
  const onlineUsers = useSelector(getOnlineUsersSelector);
  const { params } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const timeOutId = setTimeout(
      () => dispatch(searchUserAsync({ text: searchText })),
      500
    );
    return () => clearTimeout(timeOutId);
  }, [searchText]);

  const handleSearch = ({ target: { value } }) => {
    setSearchText(value);
  };

  return (
    <S.ChatMenu translate={open ? '0' : '-100%'}>
      <S.ArrowInner onClick={() => setOpen(!open)}>
        <S.Arrow rotate={open ? '-135deg' : '45deg'}></S.Arrow>
      </S.ArrowInner>
      <S.SearchPeople
        onChange={handleSearch}
        value={searchText}
        placeholder={t('search')}
        type="text"
      />
      <S.UsersList>
        {users.map((user) => {
          return user.id !== currentUser ? (
            <S.UsersItem
              onClick={() => {
                setAvatar(user.avatar);
                setReceiverId(user.id);
                findConversation(user.id);
                setOpen(!open);
              }}
              key={user.id}
              to={`${ROUTE_MESSENGER.path}/${user.id}`}
              background={
                params.receiverId === user.id ? colors.blackOpaciry : null
              }
            >
              <img src={user?.avatar ? user?.avatar : userImg} alt="" />
              {onlineUsers?.map((man) => {
                return man?.userId === user?.id ? (
                  <S.Onlain key={man?.userId}></S.Onlain>
                ) : null;
              })}
              <S.UserName>{user?.firstName + ' ' + user?.lastName}</S.UserName>
            </S.UsersItem>
          ) : null;
        })}
      </S.UsersList>
    </S.ChatMenu>
  );
};
