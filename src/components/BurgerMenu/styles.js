import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../CONST/colors';
// import { devices } from '../../CONST/break-point';

export const S = {};

S.WrapperBurger = styled.section`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${colors.colorText};
  transition: all 1s;
  transform: translateY(${({ translateX }) => translateX});
  padding: 20px;
`;

S.InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

S.Logo = styled.img`
  width: 55px;
`;

S.CloseImg = styled.img`
  width: 25px;
  cursor: pointer;
`;

S.List = styled.div`
  display: grid;
  justify-content: center;
`;

S.SelectLanguage = styled.select`
  height: 100%;
  background: ${colors.transparent};
  box-shadow: ${colors.blackOpaciry} 0px 3px 7px 0px;
  color: ${colors.white};
  outline: none;

  > option {
    background: ${colors.blackBlue};
    outline: none;
    border: none;
  }
`;

S.Inner = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

S.Link = styled(Link)`
  text-decoration: none;
`;

S.Item = styled.div`
  color: ${({ home, coloractive }) =>
    coloractive
      ? colors.orange
      : home === 'true'
      ? colors.orange
      : colors.white};
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2.5px;

  &:hover {
    color: ${colors.orange};
  }
`;

S.Icon = styled.img`
  margin-right: 25px;
  width: 20px;
`;
