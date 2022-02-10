import styled from 'styled-components';
import error from '../../assets/images/background.jpg';

export const S = {};

S.Wrapper = styled.section`
  background-image: url(${error});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100vw;
`;
