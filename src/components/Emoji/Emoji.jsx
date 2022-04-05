import React from 'react';
import { S } from './styles';
import dataEmoji from './dataEmoji.json';

export const Emoji = ({ innerBorderRef, setText, openEmoji, position }) => {
  const addEmoji = (emoji) => {
    setText((prev) => prev + emoji);
  };

  return (
    <>
      {openEmoji && (
        <S.EmojiWrapper ref={innerBorderRef} position={position}>
          {dataEmoji.map((emoji) => (
            <span onClick={() => addEmoji(emoji.emoji)} key={emoji.id}>
              {emoji.emoji}
            </span>
          ))}
        </S.EmojiWrapper>
      )}
    </>
  );
};
