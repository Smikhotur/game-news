import styled from 'styled-components';
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

  &:nth-child(2) {
    max-height: 560px;
    opacity: 0.95;

    > img {
      max-height: 560px;
      opacity: 0.95;
    }
  }

  > img {
    max-height: 400px;
    opacity: 0.45;
  }

  > h3 {
    margin-top: 20px;
    font-family: assassin-st, sans-serif;
    font-size: 18px;
    letter-spacing: 2px;
  }
`;
