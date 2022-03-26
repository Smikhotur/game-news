import React from 'react';
import { S } from './styles';
import dataEmoji from './dataEmoji.json';

export const Emoji = ({ setText, openEmoji }) => {
  const addEmoji = (emoji) => {
    setText((prev) => prev + emoji);
  };

  return (
    <>
      {openEmoji && (
        <S.EmojiWrapper>
          {dataEmoji.map((emoji) => (
            <span
              onClick={() => addEmoji(emoji.emoji)}
              handleChange
              key={emoji.id}
            >
              {emoji.emoji}
            </span>
          ))}
        </S.EmojiWrapper>
      )}
    </>
  );
};
