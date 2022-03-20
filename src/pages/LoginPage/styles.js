import styled from 'styled-components';
import { container } from '../../CONST/mixins';
import { colors } from '../../CONST/colors';
import { Link } from 'react-router-dom';
import { devices } from '../../CONST/break-point';

const S = {};

S.ContainerInner = styled.div`
  width: 100vw;
  height: 100%;
  /* background: rgba(11, 12, 42, 70%); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 185px;

  @media ${devices.mobileXL} {
    padding: 0 30px 185px;
  }

  @media ${devices.mobileL} {
    padding: 0 10px 185px;
  }
`;

S.WrapperLogin = styled.section`
  position: relative;
  ${{ ...container }};
  color: ${colors.white};
  padding: 180px 10px 0;
  max-width: 1000px;

  @media ${devices.mobileXL} {
    padding: 142px 10px 0;
  }

  @media ${devices.mobileXL} {
    padding: 142px 0 0;
  }
`;

S.LoginTitle = styled.h3`
  font-size: 48px;
  text-align: center;
  font-weight: 700;
  text-transform: capitalize;

  @media ${devices.mobileXL} {
    font-size: 38px;
  }
`;

S.LoginSubTitle = styled.h4`
  font-size: 24px;
  text-align: center;
  margin: 20px 0 50px;

  @media ${devices.mobileXL} {
    font-size: 18px;
  }
`;

S.FormsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

S.DontHaveWrapper = styled.div`
  position: relative;
  width: 370px;

  &::before {
    content: 'or';
    position: absolute;
    bottom: -45px;
    left: -60px;
    color: ${colors.white};
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media ${devices.tablet} {
      bottom: 130px;
    }

    @media ${devices.mobileXL} {
      left: calc(50% - 81px);
    }
  }

  @media ${devices.mobileXL} {
    width: 100%;
  }
`;

S.TitleForm = styled.h4`
  font-weight: 700;
  text-transform: capitalize;
  font-size: 22px;

  @media ${devices.tabletL} {
    font-size: 18px;
  }
`;

S.BtnRegistration = styled(Link)`
  display: block;
  justify-content: center;
  text-align: center;
  font-size: 13px;
  color: #fff;
  background: #e53637;
  font-weight: 700;
  border: none;
  border-radius: 2px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 12px 30px;
  text-decoration: none;
  margin-top: 30px;
  width: 100%;
`;

S.LargeButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  gap: 20px;

  @media ${devices.mobileXL} {
    padding-top: 50px;
  }
`;

S.ButtonFacebook = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  width: 460px;
  background: #4267b2;
  color: ${colors.white};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;

  > img {
    position: absolute;
    left: 30px;
    width: 25px;
  }

  @media ${devices.mobileXL} {
    width: 100%;
  }
`;

S.ButtonGoogle = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 460px;
  padding: 14px 0;
  background: #ff4343;
  color: ${colors.white};
  color: ${colors.white};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;

  > img {
    position: absolute;
    left: 30px;
    width: 25px;
  }

  @media ${devices.mobileXL} {
    width: 100%;
  }
`;

export default S;
