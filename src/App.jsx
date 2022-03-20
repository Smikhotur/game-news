import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { getAuthUserStorage } from './helpers/getAuthUser';
import { checkAuth } from './redux-slices/auth-slice';
import RouterLayout from './routes/RouterLayout';
import { getBurgerMenu } from './selectors/selector-management';
import { S } from './styles';

function App() {
  const dispatch = useDispatch();
  const burgerMenuOpen = useSelector(getBurgerMenu);

  useEffect(() => {
    const token = getAuthUserStorage();
    if (token) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <S.Wrapper>
        {burgerMenuOpen && <BurgerMenu />}
        <S.Container>
          <div></div>
          <Header />
        </S.Container>
        <div>
          <RouterLayout />
        </div>
        <S.ContainerFooter>
          <div></div>
          <Footer />
        </S.ContainerFooter>
      </S.Wrapper>
    </Suspense>
  );
}

export default App;
