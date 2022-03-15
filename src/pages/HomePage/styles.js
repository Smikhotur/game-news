import styled from 'styled-components';
import { keyframes } from 'styled-components';
// import { container } from '../../CONST/mixins';
// import { colors } from '../../CONST/colors';
import light from '../../assets/images/light.png';

export const S = {};

const k_light = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 0.3; }
  100% { opacity: 0.2; }
`;

S.ContainerInner = styled.div`
  height: 100%;
`;

S.Main = styled.main`
  height: 100%;
`;

S.SwiperWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;
  background: #535469;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 160px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    box-shadow: instet 0 0 500px #000;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-image: url(${light});
    background-position: center 55px;
    background-repeat: no-repeat;
    animation: ${k_light} 3s ease-in-out infinite;
  }

  > video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
`;
