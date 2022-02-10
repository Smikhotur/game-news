import React, { Suspense } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RouterLayout from './routes/RouterLayout';
import { S } from './styles';

function App() {
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
