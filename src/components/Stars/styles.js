import styled from 'styled-components';
import { colors } from '../../CONST/colors';
export const S = {};

S.StarsRating = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 30px;
  ${({ size }) => size};
  line-height: 0.75;
`;

S.StarsBody = styled.div`
  position: relative;

  &::before {
    content: '☆☆☆☆☆';
    display: block;
  }
`;

S.StarsActive = styled.div`
  position: absolute;
  width: ${({ widthColor }) => widthColor}%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;

  &::before {
    content: '★★★★★';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: ${colors.orange};
  }
`;

S.StarsItems = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

S.StarItem = styled.input`
  /* flex: 0 0 13.8%; */
  height: 100%;
  width: 100%;
  opacity: 0;
`;
