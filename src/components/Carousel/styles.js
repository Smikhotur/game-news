import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { keyframes } from 'styled-components';
import { colors } from '../../CONST/colors';

export const S = {};

S.ArrowLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  line-height: 1px;
  cursor: pointer;
`;

S.CardInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

S.CardLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};

  > div {
    max-height: 560px;
    opacity: 0.95;
    padding-bottom: 46px;

    > img {
      max-height: 560px;
      opacity: 0.95;
      cursor: pointer;
    }
  }

  h3 {
    margin-top: 20px;
    font-family: assassin-st, sans-serif;
    font-size: 18px;
    letter-spacing: 4px;
  }
`;
