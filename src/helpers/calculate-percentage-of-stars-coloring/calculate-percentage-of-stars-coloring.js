import { AMOUNT } from '../../CONST/amount';

export const calculatePercentageOfStarsColoring = (numberStars) => {
  return numberStars / (AMOUNT.STARS / 100);
};
