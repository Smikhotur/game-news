import styled from 'styled-components';
import { container } from '../../CONST/mixins';
import { colors } from '../../CONST/colors';
// import { Link } from 'react-router-dom';
// import { devices } from '../../CONST/break-point';

const S = {};

S.Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  /* background: rgba(11, 12, 42, 70%); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 165px;
`;

S.Wrapper = styled.section`
  position: relative;
  ${{ ...container }};
  color: ${colors.white};
  padding: 180px 10px 0;
`;

export default S;
