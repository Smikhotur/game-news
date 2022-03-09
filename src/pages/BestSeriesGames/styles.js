import styled from 'styled-components';
import { container } from '../../CONST/mixins';
import { colors } from '../../CONST/colors';
// import { Link } from 'react-router-dom';

export const S = {};

S.WrapperList = styled.section`
  ${{ ...container }};
`;

S.InnerDetails = styled.div`
  min-height: 100vh;
  padding: 180px 0;
`;

S.CardInner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

S.Card = styled.div`
  width: 100%;
  max-width: 315px;
  height: 400px;
  border-radius: 15px;
  background: ${colors.greyOpacity};
  cursor: pointer;
  transition: transform 0.6s;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;
