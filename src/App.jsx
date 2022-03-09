import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { getAuthUserStorage } from './helpers/getAuthUser';
import { checkAuth } from './redux-slices/auth-slice';
import RouterLayout from './routes/RouterLayout';
import { S } from './styles';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getAuthUserStorage();
    if (token) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <S.Wrapper>
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
