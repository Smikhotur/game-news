import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { getAuthUserStorage } from './helpers/getAuthUser';
import { checkAuth } from './redux-slices/auth-slice';
import RouterLayout from './routes/RouterLayout';
import { getBurgerMenu } from './selectors/selector-management';
import { S } from './styles';
import { io } from 'socket.io-client';
import { setOnlineUsers } from './redux-slices/management-ui-slice';
import { Unread } from './components/Unread/Unread';
import { ROUTE_MESSENGER } from './CONST/list-local-routs/list-routes-public';
import { getUnreadSelector } from './selectors/selector-messenger';
import { setUnread } from './redux-slices/messenger-slice';
// import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';

function App() {
  const socket = useRef(io('https://blooming-citadel-20389.herokuapp.com/'));
  const dispatch = useDispatch();
  const burgerMenuOpen = useSelector(getBurgerMenu);
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const [message, setMessage] = useState(null);
  const unread = useSelector(getUnreadSelector);
  // const path = window.location.pathname;
  const { location } = useHistory();

  useEffect(() => {
    const token = getAuthUserStorage();
    if (token) {
      dispatch(checkAuth());
      socket.current = io('https://blooming-citadel-20389.herokuapp.com/');
      socket.current.on('getUsers', (users) => {
        dispatch(setOnlineUsers(users));
      });
      socket.current.emit('addUser', currentUser.user.id);

      socket.current?.on('getMessage', (data) => {
        setMessage({
          receiverId: data.receiverId,
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
          avatar: data.avatar,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (!location.pathname.includes(ROUTE_MESSENGER.path)) {
      message && dispatch(setUnread([...unread, message]));
    }
  }, [message]);

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <S.Wrapper>
        {burgerMenuOpen && <BurgerMenu />}
        <S.Container>
          <div></div>
          <Header socket={socket} />
        </S.Container>
        <S.RouterWrapper>
          <Unread />
          <RouterLayout socket={socket} />
        </S.RouterWrapper>
        <S.ContainerFooter>
          <div></div>
          <Footer />
        </S.ContainerFooter>
      </S.Wrapper>
    </Suspense>
  );
}

export default App;
