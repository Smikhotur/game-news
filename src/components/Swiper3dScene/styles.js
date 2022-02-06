import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { container } from '../../CONST/mixins';
import { colors } from '../../CONST/colors';
import glow from '../../assets/images/glow.png';

export const S = {};

const k_glow = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 0.8; }
  100% { opacity: 0.6; }
`;

S.SwiperContent = styled.div`
  position: relative;
  ${{ ...container }};
  color: ${colors.white};
  padding: 180px 10px 0;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(${glow});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: ${k_glow} 1.8s ease-in-out infinite;
  }
`;

S.SwiperTitle = styled.h2`
  position: relative;
  z-index: 2;
  margin-bottom: 50px;
  text-align: center;
  font-family: assassin-st, sans-serif;
  text-transform: capitalize;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.7);

  > span {
    color: #fe1c1d;
  }
`;

S.SwiperCarusel = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;