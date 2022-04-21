/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { AMOUNT } from '../../CONST/amount';
import { calculatePercentageOfStarsColoring } from '../../helpers/calculate-percentage-of-stars-coloring';
import { getCurrentUser } from '../../helpers/getAuthUser';
import { createStarsAsync } from '../../services/async-api-games';
import { S } from './styles';

export const Stars = ({ stars }) => {
  const [percentageColoring, setPercentageColoring] = useState(0);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  console.log(percentageColoring);

  const paintOverStars = (number) => {
    setPercentageColoring(calculatePercentageOfStarsColoring(number));
  };

  useEffect(() => {
    stars ? paintOverStars(stars?.rating) : paintOverStars(0);
  }, [stars]);

  const onSubmit = (num) => {
    stars?.rating
      ? paintOverStars(stars?.rating)
      : dispatch(
          createStarsAsync({
            id_user: getCurrentUser().user.id,
            id_game: match.params.id,
            rating: num,
          })
        );
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
                paintOverStars(stars?.rating ? stars.rating : number + 1);
              }}
              onMouseLeave={() =>
                paintOverStars(stars?.rating ? stars.rating : number + 1)
              }
              onChange={() => {
                onSubmit(number + 1);
              }}
            />
          ))}
        </S.StarsItems>
      </S.StarsBody>
    </S.StarsRating>
  );
};
