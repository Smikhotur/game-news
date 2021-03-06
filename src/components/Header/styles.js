import styled from 'styled-components';
import { container } from '../../CONST/mixins';
import { colors } from '../../CONST/colors';
import { Link } from 'react-router-dom';
import { devices } from '../../CONST/break-point';
export const S = {};

S.Header = styled.header`
  position: relative;
  z-index: 3;
  ${{ ...container }};
  color: ${colors.white};
`;

S.BtnInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 20px;
  border-bottom: 1px solid rgb(29, 24, 43);

  @media ${devices.mobileXL} {
    padding: 0 10px 9px;
  }
`;

S.BtnBurger = styled.img`
  display: none;
  cursor: pointer;

  @media ${devices.mobileXL} {
    display: block;
  }
`;

S.ButtonBox = styled.div`
  position: relative;
  display: flex;
  margin-top: 10px;

  > img {
    position: absolute;
    right: 0;
    top: 7px;
    width: 20px;

    @media ${devices.laptop} {
      display: none;
    }
  }

  @media ${devices.mobileXL} {
    display: none;
  }
`;

S.BtnSocial = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 32px;
  border-radius: 4px;
  background: ${colors.blackBlue};
  box-shadow: ${colors.blackOpaciry} 0px 3px 7px 0px;
  font-size: 12px;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.2);
  }

  > a {
    > img {
      width: 15px;
    }
  }

  > img {
    width: 15px;
  }
`;

S.InputSearch = styled.input`
  background: inherit;
  color: ${colors.white};
  border: none;
  outline: none;

  &::placeholder {
    &:first-letter {
      text-transform: uppercase;
    }
  }

  @media ${devices.laptop} {
    display: none;
  }
`;

S.BtnRegistrationInner = styled.div`
  display: flex;
  margin-top: 10px;
`;

S.LoginLink = styled(Link)``;

S.Settings = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;

  img {
    position: absolute;
    top: -5px;
    right: 0;
    width: 45px;
    cursor: pointer;
    border-radius: 50%;
    ${({ stylesAvatar }) => stylesAvatar};
  }

  @media ${devices.mobileXL} {
    margin-right: 0;
  }
`;

S.NameUser = styled.div`
  font-size: 15px;
  font-weight: 400;
  text-transform: capitalize;
  margin-right: 60px;

  @media ${devices.laptop} {
    display: none;
  }
`;

S.ModalLogOut = styled.div`
  position: absolute;
  background: #111;
  top: 20px;
  left: -55px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  box-shadow: 9px 13px 26px -8px #333;
  letter-spacing: 2px;

  @media ${devices.laptop} {
    z-index: 4;
    left: -240px;
  }
`;

S.NameUserMenu = styled.div`
  display: none;
  font-size: 15px;
  font-weight: 400;
  text-transform: capitalize;

  @media ${devices.laptop} {
    display: block;
    color: ${colors.orange};
  }
`;

S.Link = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
`;

S.Item = styled.div`
  &:hover {
    color: #e53637;
    cursor: pointer;
  }
`;

S.CloseModal = styled.div`
  position: absolute;
  background: #e53637;
  border-radius: 50%;
  top: -6px;
  right: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  color: #000;
  box-shadow: 9px 13px 26px -8px #333;
  cursor: pointer;
`;

S.SelectLanguage = styled.select`
  height: 100%;
  background: ${colors.blackBlue};
  box-shadow: ${colors.blackOpaciry} 0px 3px 7px 0px;
  color: ${colors.white};
  outline: none;

  > option {
    background: ${colors.blackBlue};
    outline: none;
    border: none;
  }

  @media ${devices.mobileXL} {
    display: none;
  }
`;

S.TransformSkew = styled.div`
  position: absolute;
  z-index: -2;
  top: 130px;
  border-bottom: 30px solid rgba(29, 24, 43, 0.8);
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  transform: rotate(180deg);
  height: 0;
  width: 100%;

  @media ${devices.mobileXL} {
    top: 113px;
    border-left: 0 solid transparent;
    border-right: 0 solid transparent;
  }

  @media ${devices.mobileL} {
    border-bottom: 10px solid rgba(29, 24, 43, 0.8);
  }
`;
