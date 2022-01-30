import styled from 'styled-components';
import creed from '../../assets/images/creed.jpg';
export const S = {};

S.Wrapper = styled.div``;

S.Container = styled.section`
  position: relative;
  z-index: -2;
  background: url(${creed});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  > div {
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    background-color: rgba(29, 24, 43, 0.8);
    width: 100%;
    height: 130px;
  }
`;
