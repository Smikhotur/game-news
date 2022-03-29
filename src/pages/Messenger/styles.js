import styled from 'styled-components';
import '../../assets/font.css';
// import { colors } from '../../CONST/colors';
// import { devices } from '../../CONST/break-point';

export const S = {};

S.Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  /* background: rgba(11, 12, 42, 70%); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

S.WrapperMessenger = styled.section`
  display: flex;
  max-width: 1231px;
  margin: 0 auto;
  padding: 160px 0 0;
  height: 100%;
  min-height: calc(100vh - 143px);
  padding-bottom: 143px;
`;
