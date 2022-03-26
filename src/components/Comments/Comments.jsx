import React, { useState } from 'react';
import { Emoji } from '../Emoji/Emoji';
import { S } from './styles';
import comments from './data.json';
import { useTranslation } from 'react-i18next';
import emoji from '../../assets/images/emoji.png';
import useOnOutsideClick from '../../custom-hooks/useOnOutsideClick';

export const Comments = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState('');
  const { t } = useTranslation(['common']);
  const { innerBorderRef } = useOnOutsideClick(() => setOpenEmoji(false));
  const handleSubmit = () => {};

  const handleChange = () => {
    setOpenEmoji(!openEmoji);
  };

  const addText = ({ target: { value } }) => {
    setText(value);
  };

  console.log(text);

  return (
    <S.WrapperComments>
      <S.TitleComments>{t('comments')}</S.TitleComments>
      <S.FormComment onSubmit={handleSubmit}>
        <S.InnerTitle ref={innerBorderRef}>
          <S.FormTitle>{t('leave_comment')}</S.FormTitle>
          <img onClick={handleChange} title="Emoji" src={emoji} alt="" />
          <Emoji setText={setText} openEmoji={openEmoji} />
        </S.InnerTitle>
        <S.InnerTitle>
          <S.Text
            onChange={addText}
            value={text}
            placeholder={t('write_comments')}
          />
          <S.Button type="submmit">Send</S.Button>
        </S.InnerTitle>
      </S.FormComment>
      <S.InnerComment>
        {comments.map((comment) => (
          <S.CommentBox key={comment?.id}>
            <S.Avatar src={comment.avatar} />
            <S.Comment>
              <S.CommentAutorInner>
                <S.DivTransform></S.DivTransform>
                <S.CommentAutor>{comment.autor}</S.CommentAutor>
                <S.CommentData>{comment.date_left}</S.CommentData>
              </S.CommentAutorInner>
              <S.CommentText>{comment.text}</S.CommentText>
            </S.Comment>
          </S.CommentBox>
        ))}
      </S.InnerComment>
    </S.WrapperComments>
  );
};
