import styled from 'styled-components';
import '../../assets/font.css';
import { colors } from '../../CONST/colors';
import { devices } from '../../CONST/break-point';
import { Link } from 'react-router-dom';

export const S = {};

S.ChatMenu = styled.div`
  background-color: ${colors.menuMesseng};
  width: 360px;
  padding: 10px 0 0 20px;
  color: ${colors.redOpacity};

  @media ${devices.laptopXL} {
    width: 277px;
  }

  @media ${devices.tabletL} {
    margin-right: -277px;
    background-color: ${colors.colorText};
    position: relative;
    z-index: 2;
    transition: transform 0.6s;
    transform: translateX(${({ translate }) => translate});
  }
`;

S.ArrowInner = styled.div`
  display: none;
  height: 39px;
  width: 21px;
  background-color: ${colors.colorText};
  overflow: hidden;
  border-radius: 3px;

  @media ${devices.tabletL} {
    position: absolute;
    right: -15px;
    top: 14px;
    display: block;
  }
`;

S.Arrow = styled.div`
  position: relative;
  right: -6px;
  top: 14px;
  height: 10px;
  width: 10px;
  background-color: ${colors.colorText};
  border-top: 1px solid ${colors.orange};
  border-right: 1px solid ${colors.orange};
  transition: transform 0.6s;
  transform: rotate(${({ rotate }) => rotate});
`;

S.SearchPeople = styled.input`
  background-color: ${colors.transparent};
  border-radius: 5px;
  border: 1px solid ${colors.blackBlue};
  width: 100%;
  height: 45px;
  color: ${colors.white};
  padding: 0 10px;
  outline: none;
  position: relative;
  right: 10px;

  &::placeholder {
    color: ${colors.blackBlue};
  }
`;

S.UsersList = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  overflow-y: auto;
  height: calc(100vh - 368px);

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  @media ${devices.laptopXL} {
    height: calc(100vh - 293px);
  }

  @media ${devices.mobileL} {
    height: calc(100vh - 265px);
  }
`;

S.UsersItem = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid ${colors.transparent};
  padding: 5px 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 5px;
  color: ${colors.redOpacity};
  background-color: ${({ background }) => background};

  > img {
    margin-right: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  &:hover {
    border: 1px solid ${colors.blackBlue};
    border-radius: 5px;
    padding: 5px 10px;
    background-color: ${colors.blackOpaciry};
  }
`;
S.UserName = styled.div``;
S.Onlain = styled.div`
  position: absolute;
  top: 6px;
  left: 40px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
`;
