import styled from 'styled-components';
import { colors } from '../../CONST/colors';
import '../../assets/font.css';
import { devices } from '../../CONST/break-point';

export const S = {};

S.InnerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 15px 0;

  > img {
    @media ${devices.tablet} {
      width: 70%;
      margin-bottom: 20px;
    }

    @media ${devices.mobileXL} {
      width: 100%;
    }
  }

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

S.InfoBigTitle = styled.div`
  font-family: assassin-st, sans-serif;
  font-size: 28px;
  color: ${colors.orange};
  letter-spacing: 2px;
`;

S.Info = styled.div`
  width: 100%;
  margin-left: 30px;
`;

S.InfoTitle = styled.div``;

S.InfoSubtitle = styled.div`
  color: ${colors.white};
`;

S.WrapperStars = styled.div`
  align-self: flex-start;
`;

S.StarsTitle = styled.div`
  font-family: assassin-st, sans-serif;
  font-size: 18px;
  color: ${colors.orange};
  white-space: nowrap;
  margin-bottom: 8px;
`;
