import styled from 'styled-components';
import { colors } from '../../CONST/colors';
import { Link } from 'react-router-dom';
import { devices } from '../../CONST/break-point';

export const S = {};

S.Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px 10px 0;

  @media ${devices.laptop} {
    justify-content: space-between;
  }
`;

S.List = styled.ul`
  display: flex;
  gap: 20px;

  @media ${devices.mobileXL} {
    display: none;
  }
`;

S.Item = styled.li``;

S.LinkHome = styled(Link)`
  position: absolute;
  top: 0;
  left: calc(50% - 125px);

  > img {
    @media ${devices.mobileXL} {
      width: 218px;
    }

    @media ${devices.mobileL} {
      width: 166px;
    }
  }

  > div {
    display: none;

    @media ${devices.laptop} {
      position: relative;
      top: 5px;
      display: block;
      width: 209px;
      padding-left: 38px;
    }

    @media ${devices.mobileXL} {
      padding-left: 0;
    }

    @media ${devices.mobileL} {
      right: 24px;
    }

    > img {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 15px;
    }

    > input {
      background: inherit;
      color: ${colors.white};
      border: none;
      outline: none;

      &::placeholder {
        &:first-letter {
          text-transform: uppercase;
        }
      }
    }
  }

  @media ${devices.mobileXL} {
    left: calc(50% - 108px);
  }

  @media ${devices.mobileL} {
    width: 166px;
    left: calc(50% - 80px);
  }
`;

S.Link = styled(Link)`
  text-decoration: none;
  color: ${({ home, coloractive }) =>
    coloractive
      ? colors.orange
      : home === 'true'
      ? colors.orange
      : colors.white};
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  border-bottom: 1px solid
    ${({ home, coloractive }) =>
      coloractive
        ? colors.orange
        : home === 'true'
        ? colors.orange
        : colors.transparent};

  &:hover {
    color: ${colors.orange};
    border-bottom: 1px solid ${colors.orange};
  }
`;
