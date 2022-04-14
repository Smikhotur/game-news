import React, { useState } from 'react';
import { AMOUNT } from '../../CONST/amount';
import { calculatePercentageOfStarsColoring } from '../../helpers/calculate-percentage-of-stars-coloring';
import { S } from './styles';

export const Stars = () => {
  const [percentageColoring, setPercentageColoring] = useState(0);

  const paintOverStars = (number) => {
    setPercentageColoring(calculatePercentageOfStarsColoring(number));
  };

  return (
    <S.StarsRating>
      <S.StarsBody>
        <S.StarsActive widthColor={percentageColoring}></S.StarsActive>
        <S.StarsItems>
          {[...Array(AMOUNT.STARS).keys()].map((number) => (
            <S.StarItem
              key={number}
              id="simple-rating"
              name="numberOfStars"
              value={percentageColoring}
              type="radio"
              onMouseOver={() => {
                paintOverStars(number + 1);
              }}
              onMouseLeave={() => paintOverStars(number + 1)}
              onChange={() => setPercentageColoring(number + 1)}
            />
          ))}
        </S.StarsItems>
      </S.StarsBody>
    </S.StarsRating>
  );
};
