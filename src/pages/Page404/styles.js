import styled from 'styled-components';
import '../../assets/font.css';
import { colors } from '../../CONST/colors';
import { devices } from '../../CONST/break-point';

export const S = {};

S.Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  > button {
    padding: 8px 12px;
    border-radius: 8px;
    background-color: ${colors.orange};
    border: 2px solid ${colors.orangeOver};
    color: ${colors.white};
    cursor: pointer;

    &:hover {
      transform: scale(0.8);
    }
  }

  > div {
    color: ${colors.orange};
  }
`;

S.Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

S.TextError = styled.div`
  font-family: assassin-st, sans-serif;
  color: ${colors.orange};
  margin-right: 20px;
`;
S.Title = styled.p`
  font-size: 75px;

  @media ${devices.mobileXL} {
    font-size: 55px;
  }
`;

S.Subtitle = styled.p`
  font-size: 35px;

  @media ${devices.mobileXL} {
    font-size: 25px;
  }
`;

S.Image = styled.img`
  height: 300px;

  @media ${devices.mobileXL} {
    height: 150px;
  }
`;
