import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../CONST/break-point';
import { colors } from '../../CONST/colors';

const S = {};

S.Form = styled.form`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -50px;
    height: 250px;
    width: 1px;
    background: #0b0c2a;

    @media ${devices.tablet} {
      width: 445px;
      height: 1px;
      top: 293px;
    }

    @media ${devices.mobileXL} {
      width: 142px;
      right: calc(50% - 90px);
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

S.InputEmail = styled.input`
  position: relative;
  display: block;
  height: 50px;
  max-width: 370px;
  width: 100%;
  font-size: 15px;
  color: ${colors.colorText};
  background: #fff;
  border: none;
  padding-left: 76px;
  outline: none;

  &::placeholder {
    text-transform: capitalize;
  }

  @media ${devices.mobileXL} {
    min-width: 100%;
  }
`;

S.InputLogin = styled.input`
  display: block;
  height: 50px;
  max-width: 370px;
  width: 100%;
  font-size: 15px;
  color: #b7b7b7;
  background: #fff;
  border: none;
  padding-left: 76px;
  text-transform: capitalize;

  @media ${devices.mobileXL} {
    min-width: 100%;
  }
`;

S.LabelEmail = styled.label`
  position: relative;
  display: block;
  margin: 20px 0;

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    left: 50px;
    top: 10px;
    height: 30px;
    width: 1px;
    background: #b7b7b7;
  }

  > img {
    position: absolute;
    z-index: 1;
    width: 30px;
    top: 10px;
    left: 10px;
  }
`;

S.LabelLogin = styled.label`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    left: 50px;
    bottom: -40px;
    height: 30px;
    width: 1px;
    background: #b7b7b7;
  }

  > img {
    position: absolute;
    left: 10px;
    bottom: -40px;
    width: 30px;
  }
`;

S.ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  width: 370px;

  @media ${devices.mobileXL} {
    width: 100%;
  }
`;

S.InnerSpinner = styled.div`
  position: absolute;
`;

S.BtnLogin = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: #fff;
  background: #e53637;
  font-weight: 700;
  border: none;
  border-radius: 2px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 12px 30px;
  min-width: 147px;
  min-height: 41px;

  @media ${devices.mobileXL} {
    font-size: 10px;
  }
`;

S.BtnForgot = styled(Link)`
  font-size: 15px;
  cursor: pointer;
  color: ${colors.white};
  text-decoration: none;

  @media ${devices.mobileXL} {
    font-size: 10px;
  }
`;

export default S;
