import styled from 'styled-components';
import { container } from '../../CONST/mixins';
import { colors } from '../../CONST/colors';

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
  height: 400px;
  border-radius: 15px;
  background: ${colors.greyOpacity};
  cursor: pointer;
  transition: transform 0.6s;

  &:hover {
    transform: scale(1.05);
  }
`;
