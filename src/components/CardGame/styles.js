import styled from 'styled-components';
import { colors } from '../../CONST/colors';

export const S = {};

S.BoxCard = styled.div`
  text-align: center;

  > img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 180px;
    width: 100%;
    max-width: 315px;
  }

  > a {
    color: ${colors.white};

    &:hover {
      color: ${colors.orange};
    }
  }
`;

S.TitleCard = styled.h3`
  margin-top: 10px;
  text-transform: uppercase;
  color: ${colors.white};
  text-decoration: none;
  letter-spacing: 3px;
`;

S.TextCard = styled.h4`
  margin-top: 12px;
  text-transform: uppercase;
  color: ${colors.white};
  text-decoration: none;
  letter-spacing: 3px;
  font-size: 10px;
`;

S.SubtitleCard = styled.h4`
  margin-top: 5px;
  text-transform: uppercase;
  color: ${colors.white};
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 8px;
`;
