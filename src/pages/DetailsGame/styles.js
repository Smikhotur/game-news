import styled from 'styled-components';
import { colors } from '../../CONST/colors';
import { container } from '../../CONST/mixins';
import '../../assets/font.css';
import { devices } from '../../CONST/break-point';

export const S = {};

S.ContainerDetails = styled.section`
  ${{ ...container }};
`;

S.InnerDetails = styled.div`
  min-height: 100vh;
  padding: 180px 0;
`;

S.InnerSlide = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
  background: url(${({ img }) => img});
  background-size: cover;
  height: 560px;

  @media ${devices.laptop} {
    height: 421px;
  }

  @media ${devices.tablet} {
    height: 274px;
  }

  @media ${devices.mobileXL} {
    height: 174px;
    margin: 0 20px;
  }
`;

S.ButtonLeftInner = styled.div`
  position: relative;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  background-color: ${colors.grey};
  transform: rotate(45deg);
  cursor: pointer;

  @media ${devices.mobileXL} {
    height: 30px;
    width: 30px;
    right: 15px;
  }
`;

S.ButtonRightInner = styled.div`
  position: relative;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  background-color: ${colors.grey};
  transform: rotate(45deg);
  cursor: pointer;

  @media ${devices.mobileXL} {
    height: 30px;
    width: 30px;
    left: 15px;
  }
`;

S.ButtonLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background-color: ${colors.blackBlue};
  transition: transform 0.4s;

  @media ${devices.mobileXL} {
    height: 25px;
    width: 25px;
  }

  &::before {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    border-left: 2px solid ${colors.orange};
    border-bottom: 2px solid ${colors.orange};

    @media ${devices.mobileXL} {
      height: 8px;
      width: 8px;
    }
  }

  &:hover {
    transform: scale(1.2);
  }
`;

S.ButtonRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background-color: ${colors.blackBlue};
  transition: transform 0.4s;

  @media ${devices.mobileXL} {
    height: 25px;
    width: 25px;
  }

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    border-right: 2px solid ${colors.orange};
    border-top: 2px solid ${colors.orange};

    @media ${devices.mobileXL} {
      height: 8px;
      width: 8px;
    }
  }

  &:hover {
    transform: scale(1.2);
  }
`;

S.InnerPoints = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 10px;
  left: calc(50% - ${({ number }) => number + 'px'});
  margin-bottom: 20px;
`;

S.Point = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

S.InfoBigTitle = styled.div`
  font-family: assassin-st, sans-serif;
  font-size: 28px;
  color: ${colors.orange};
  letter-spacing: 2px;
`;

S.Title = styled.div`
  margin: 30px 0;
  text-align: center;
  font-family: assassin-st, sans-serif;
  text-transform: uppercase;
  font-size: 32px;
  color: ${colors.orange};
  letter-spacing: 2px;

  @media ${devices.mobileXL} {
    margin: 20px 0 15px;
    font-size: 25px;
  }
`;

S.Subtitle = styled.div`
  letter-spacing: 1.5px;
  font-size: 18px;
  color: ${colors.white};
  padding: 0 15px;

  @media ${devices.mobileXL} {
    font-size: 14px;
    letter-spacing: 1px;
  }
`;

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

S.Info = styled.div`
  width: 100%;
  margin-left: 30px;
`;

S.InfoTitle = styled.div``;
S.InfoSubtitle = styled.div`
  color: ${colors.white};
`;

S.InnerOval = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 380px);
`;
