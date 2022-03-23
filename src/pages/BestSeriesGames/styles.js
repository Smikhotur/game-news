import styled from 'styled-components';
import { container } from '../../CONST/mixins';
import { colors } from '../../CONST/colors';
import { devices } from '../../CONST/break-point';

export const S = {};

S.WrapperList = styled.section`
  ${{ ...container }};
`;

S.InnerDetails = styled.div`
  min-height: 100vh;
  padding: 180px 10px;

  @media ${devices.mobileXL} {
    padding: 164px 10px 117px;
  }

  @media ${devices.mobileL} {
    padding: 145px 10px 117px;
  }
`;

S.TitleSeries = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
  text-align: center;
  font-family: assassin-st, sans-serif;
  text-transform: capitalize;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.7);
`;

S.CardInner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.tabletL} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.mobileXL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

S.InnerOval = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 380px);
`;

S.Card = styled.div`
  width: 100%;
  max-width: 315px;
  border-radius: 15px;
  background: ${colors.greyOpacity};
  cursor: pointer;
  transition: transform 0.6s;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }

  @media ${devices.tabletL} {
    &:nth-child(odd) {
      justify-self: flex-end;
    }
  }

  @media ${devices.mobileXL} {
    justify-self: center;

    &:nth-child(odd) {
      justify-self: center;
    }
  }
`;
