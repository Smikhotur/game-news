import styled from 'styled-components';
import { container } from '../../CONST/mixins';
import { colors } from '../../CONST/colors';
import { Link } from 'react-router-dom';

const S = {};

S.ContainerInner = styled.div`
  width: 100vw;
  height: 100%;
  background: rgba(11, 12, 42, 70%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

S.WrapperLogin = styled.section`
  position: relative;
  ${{ ...container }};
  color: ${colors.white};
  padding: 180px 10px 0;
  max-width: 1000px;
`;

S.LoginTitle = styled.h3`
  font-size: 48px;
  text-align: center;
  font-weight: 700;
  text-transform: capitalize;
`;

S.LoginSubTitle = styled.h4`
  font-size: 24px;
  text-align: center;
  margin: 20px 0 50px;
`;

S.FormsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
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
  }
`;

S.TitleForm = styled.h4`
  font-weight: 700;
  text-transform: capitalize;
  font-size: 22px;
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
`;

export default S;
