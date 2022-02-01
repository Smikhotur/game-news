import styled from 'styled-components';
import { colors } from '../../CONST/colors';
import { Link } from 'react-router-dom';
export const S = {};

S.Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 0;

  > img {
    position: absolute;
    top: 0;
    left: calc(50% - 125px);
  }
`;

S.List = styled.ul`
  display: flex;
  gap: 20px;
`;

S.Item = styled.li``;

S.Link = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
`;
