import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AMOUNT } from '../../CONST/amount';
import { colors } from '../../CONST/colors';
import { S } from './styles';

export const Pagination = ({ games, setStartShow, setEndShow }) => {
  const { t } = useTranslation(['common']);
  const [count, setCount] = useState(1);
  const [startPage, setStartPage] = useState(AMOUNT.CARD_START);
  const [endPage, setEndPage] = useState(AMOUNT.PAGE);

  const nextPage = () => {
    if (count < games.length / AMOUNT.CARD_END) {
      setEndShow((prev) => prev + AMOUNT.CARD_END);
      setStartShow((prev) => prev + AMOUNT.CARD_END);
      setCount((prev) => prev + 1);
    }

    if (count >= AMOUNT.PAGE) {
      setEndPage((prev) => prev + 1);
      setStartPage((prev) => prev + 1);
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const previousPage = () => {
    if (count > 1) {
      setEndShow((prev) => prev - AMOUNT.CARD_END);
      setStartShow((prev) => prev - AMOUNT.CARD_END);
      setCount((prev) => prev - 1);
    }

    if (count > AMOUNT.PAGE) {
      setEndPage((prev) => prev - 1);
      setStartPage((prev) => prev - 1);
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {games.length > AMOUNT.CARD_END && (
        <>
          <S.InnerPagination>
            <S.LeftArrow onClick={previousPage}></S.LeftArrow>
            {[...Array(Math.ceil(games.length / AMOUNT.CARD_END)).keys()]
              .slice(startPage, endPage)
              .map((num) => (
                <S.ButtonPaginaation
                  color={count === num + 1 ? colors.white : colors.orange}
                  key={num}
                >
                  {num + 1}
                </S.ButtonPaginaation>
              ))}
            <S.RightArrow onClick={nextPage}></S.RightArrow>
          </S.InnerPagination>
          <S.AllPage>
            {`${count} ${t('pages')} ${Math.ceil(
              games.length / AMOUNT.CARD_END
            )}`}
          </S.AllPage>
        </>
      )}
    </>
  );
};
