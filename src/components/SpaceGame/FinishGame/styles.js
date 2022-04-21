import styled from 'styled-components';
import { colors } from '../../../CONST/colors';
// import { devices } from '../../CONST/break-point';

export const S = {};

S.FinishGameInner = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;

  > div {
    text-align: center;
    margin-top: 142px;
    text-transform: capitalize;
    color: ${colors.orangeOver};
    font-size: 16px;
    letter-spacing: 2px;

    > span {
      margin-left: 15px;
      color: ${colors.yellowOver};
    }

    > button {
      position: absolute;
      bottom: 20px;
      width: 60px;
      left: calc(50% - 30px);
      background-color: ${colors.orangeOver};
      color: ${colors.yellowOver};
      padding: 5px 0;
      border-radius: 6px;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;
