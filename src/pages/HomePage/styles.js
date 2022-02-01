import styled from 'styled-components';
import { container } from '../../CONST/mixins';
import { colors } from '../../CONST/colors';
import creed from '../../assets/images/creed.jpg';
export const S = {};

S.ContainerInner = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${creed});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

S.Main = styled.main`
  position: relative;
  ${{ ...container }};
  color: ${colors.white};
  padding: 180px 10px 0;
`;
