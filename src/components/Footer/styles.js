import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../CONST/break-point';
import { colors } from '../../CONST/colors';
import { container } from '../../CONST/mixins';

export const S = {};

S.WrapperFooter = styled.section`
  position: relative;
  ${container};
  color: ${colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  gap: 30px;
`;

S.TransformSkew = styled.div`
  position: absolute;
  z-index: -2;
  top: -30px;
  border-bottom: 30px solid rgba(29, 24, 43, 0.8);
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
  width: 100%;

  @media ${devices.mobileXL} {
    top: -18px;
    border-bottom: 18px solid rgba(29, 24, 43, 0.8);
    border-left: 0 solid transparent;
    border-right: 0 solid transparent;
  }

  @media ${devices.mobileL} {
    top: -10px;
    border-bottom: 10px solid rgba(29, 24, 43, 0.8);
  }
`;

S.AboutUSFooter = styled.div`
  position: absolute;
  z-index: -2;
  top: -30px;
  border-bottom: 30px solid rgba(29, 24, 43, 0.8);
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
  width: 100%;
`;

S.LinkFooter = styled(Link)`
  position: relative;
  z-index: 5;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: ${colors.white};
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: 1px solid ${colors.transparent};

  &:hover {
    color: ${colors.orange};
    border-bottom: 1px solid ${colors.orange};
  }

  @media ${devices.mobileXL} {
    font-size: 10px;
  }
`;

S.CooryFooter = styled.div`
  position: absolute;
  top: 80px;
  left: calc(50% - 65px);
  height: 20px;

  @media ${devices.mobileXL} {
    left: calc(50% - 38px);
    top: 40px;
    font-size: 10px;
  }
`;

S.LogoImg = styled.img`
  width: 180px;

  @media ${devices.mobileXL} {
    width: 80px;
  }
`;

S.InnerImages = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
`;

S.ImageLeft = styled.img`
  position: relative;
  height: 160px;

  @media ${devices.laptop} {
    left: -100px;
  }

  @media ${devices.mobileXL} {
    display: none;
  }
`;

S.ImageRight = styled.img`
  position: relative;
  bottom: 20px;
  height: 200px;

  @media ${devices.laptop} {
    right: -130px;
  }

  @media ${devices.mobileXL} {
    display: none;
  }
`;
