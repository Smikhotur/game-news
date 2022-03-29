import styled from 'styled-components';
import '../../assets/font.css';
import { colors } from '../../CONST/colors';
// import { devices } from '../../CONST/break-point';

export const S = {};

S.ChatMenu = styled.div`
  background-color: ${colors.menuMesseng};
  width: 360px;
  padding: 10px 20px;
  color: ${colors.redOpacity};
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

  &::placeholder {
    color: ${colors.blackBlue};
  }
`;

S.UsersList = styled.div`
  margin-top: 15px;
`;

S.UsersItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid ${colors.transparent};
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 5px;

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
