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

S.LinkFooter = styled.div`
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
`;

S.CooryFooter = styled.div`
  position: absolute;
  top: 80px;
  left: calc(50% - 40px);
  height: 20px;
`;

S.LogoImg = styled.img`
  width: 180px;
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
`;

S.ImageRight = styled.img`
  position: relative;
  bottom: 20px;
  height: 200px;

  @media ${devices.laptop} {
    right: -130px;
  }
`;
