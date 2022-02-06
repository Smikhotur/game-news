import React from 'react';
import { S } from './styles';
import '../../assets/styles.css';
import Carousel from '../Carousel/Carousel';

const Swiper3dScene = () => {
  return (
    <S.SwiperContent>
      <S.SwiperTitle>
        best series <span>games</span>
      </S.SwiperTitle>
      <S.SwiperCarusel>
        <Carousel />
      </S.SwiperCarusel>
    </S.SwiperContent>
  );
};

export default Swiper3dScene;
