import React, { useState } from 'react';
import { ROUTE_BEST_SERIES_GAME } from '../../CONST/list-local-routs/list-routes-public';
import Card from './Card/Card';
import { initalState } from './Card/data';
import { S } from './styles';

const Carousel = () => {
  const [cards, setCards] = useState(initalState);

  const handleLeftClick = () => {
    const prevState = [...cards];
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;

    prevState.find((f) => f.active === false).active = true;

    prevState.find((f) => f.idx === nextCardIdx).active = false;

    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map((el) => {
          return el.pos;
        })
      ) + 1;

    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx;

    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;

    prevState.find((f) => f.active === false).active = true;

    prevState.find((f) => f.idx === nextCardIdx).active = false;

    setCards(prevState);
  };

  return (
    <>
      <S.ArrowLeft onClick={handleLeftClick}>{'<'}</S.ArrowLeft>
      <S.CardInner>
        {cards
          .filter((f) => f.active === true)
          .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
          .map((card, index) =>
            index !== 1 ? (
              <Card key={index} image={card.image} name={card.name} />
            ) : (
              <S.CardLink to={ROUTE_BEST_SERIES_GAME.path}>
                <Card key={index} image={card.image} name={card.name} />
              </S.CardLink>
            )
          )}
      </S.CardInner>

      <S.ArrowLeft onClick={handleRightClick}>{'>'}</S.ArrowLeft>
    </>
  );
};

export default Carousel;
