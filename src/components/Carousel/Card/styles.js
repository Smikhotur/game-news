import styled from 'styled-components';
import { devices } from '../../../CONST/break-point';
// import { colors } from '../../CONST/colors';

export const S = {};

S.Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  width: 100%;
  max-height: 400px;
  opacity: 0.45;
  transition: all 5s;

  > img {
    max-height: 400px;
    opacity: 0.45;

    @media ${devices.tabletL} {
      max-height: 200px;
    }
  }

  > h3 {
    margin-top: 20px;
    font-family: assassin-st, sans-serif;
    font-size: 18px;
    letter-spacing: 2px;
  }
`;
