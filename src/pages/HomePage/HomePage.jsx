import React, { useEffect, useRef } from 'react';
import Swiper3dScene from '../../components/Swiper3dScene/Swiper3dScene';
import { S } from './styles';
import video from '../../assets/video/smoke.mp4';

const HomePage = () => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.playbackRate = 2;
  }, []);

  return (
    <S.ContainerInner>
      <S.Main>
        <S.SwiperWrapper>
          <Swiper3dScene />
          <video ref={videoRef} src={video} autoPlay loop muted></video>
        </S.SwiperWrapper>
      </S.Main>
    </S.ContainerInner>
  );
};

export default HomePage;
