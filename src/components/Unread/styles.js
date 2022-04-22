import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../CONST/colors';
// import { devices } from './CONST/break-point';

export const S = {};

const rotate = keyframes`
  0% {
    width: 100%;
  }

  50% {
    width: 100%;
  }
  
  75% {
    width: 100%;
  }

  100% {
    width: 45%;
  }
`;

const blur = keyframes`
  from {
    text-shadow: 0 0 10px ${colors.white}, 0 -10px 100px ${colors.lightBlue};
  }
`;

S.UnreadInner = styled.div`
  position: fixed;
  right: 15px;
  bottom: 30px;
  z-index: 10;
`;

S.UnreadList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  animation: ${blur} 0.75s ease-out infinite;
  text-shadow: 0 0 5px ${colors.white}, 0 0 7px ${colors.white};
`;

S.UnreadItem = styled(Link)`
  display: flex;
  margin-bottom: 15px;
  text-decoration: none;
  width: 58px;
  animation: ${rotate} 3s linear;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px;
  background-color: ${colors.blue};
  border-radius: 8px;

  &:hover {
    animation: none;
    width: 100%;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

S.UnreadImage = styled.img`
  width: 32px;
  margin-right: 25px;
  transform: scale(2);
`;

S.UnreadText = styled.span``;
