import React, { Suspense } from 'react';
import Header from './components/Header/Header';
import RouterLayout from './routes/RouterLayout';
import { S } from './styles';

function App() {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <S.Wrapper>
        <S.Container>
          <div></div>
          <Header />
        </S.Container>
        <RouterLayout />
      </S.Wrapper>
    </Suspense>
  );
}

export default App;
