import styled from 'styled-components';
import { container } from '../../CONST/mixins';
import { colors } from '../../CONST/colors';
import { Link } from 'react-router-dom';
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
`;

S.BtnRegistrationInner = styled.div`
  display: flex;
  margin-top: 10px;
`;

S.LoginLink = styled(Link)``;

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
`;
