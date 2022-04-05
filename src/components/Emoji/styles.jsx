import styled from 'styled-components';
import { colors } from '../../CONST/colors';
import '../../assets/font.css';
// import { devices } from '../../CONST/break-point';

export const S = {};

S.EmojiWrapper = styled.div`
  position: absolute;
  ${({ position }) => position}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  width: 300px;
  background-color: ${colors.colorText};
  border-radius: 8px;
  z-index: 2;

  > span {
    display: flex;
    justify-content: center;
    width: 24px;
    cursor: default;
  }
`;
