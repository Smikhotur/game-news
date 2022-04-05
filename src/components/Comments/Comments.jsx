import React, { useEffect, useState } from 'react';
import { Emoji } from '../Emoji/Emoji';
import { S } from './styles';
import { useTranslation } from 'react-i18next';
import emoji from '../../assets/images/emoji.png';
import useOnOutsideClick from '../../custom-hooks/useOnOutsideClick';
import { useDispatch, useSelector } from 'react-redux';
import {
  createCommentAsync,
  getCommentAsync,
} from '../../services/async-api-games';
import { HTTP_REQUEST_STATUS } from '../../CONST/http-request-status';
import { getCommentsSelector } from '../../selectors/selector-games';

export const Comments = ({ id_game }) => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [page, setPage] = useState(5);
  const [fetching, setFetching] = useState(true);
  const [text, setText] = useState('');
  const { t } = useTranslation(['common']);
  const { innerBorderRef } = useOnOutsideClick(() => setOpenEmoji(false));
  const dispatch = useDispatch();
  const comments = useSelector(getCommentsSelector);

  useEffect(async () => {
    let response = null;

    if (fetching) {
      (async () => {
        response = await dispatch(getCommentAsync({ id_game, count: page }));
      })();
    }

    setPage((prev) => prev + 5);

    if (response) {
      setFetching(false);
    }
  }, [fetching]);

  useEffect(async () => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    const scrollTop =
      e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight);

    console.log(scrollTop);

    if (scrollTop < 100) {
      setFetching(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const respons = await dispatch(
      createCommentAsync({
        id_person: JSON.parse(localStorage.getItem('user')).user.id,
        id_game,
        text,
      })
    );

    if (respons.meta.requestStatus === HTTP_REQUEST_STATUS.FULFILLED) {
      setText('');
    }
  };

  const handleChange = () => {
    setOpenEmoji(!openEmoji);
  };

  const addText = ({ target: { value } }) => {
    setText(value);
  };

  return (
    <S.WrapperComments>
      <S.TitleComments>{t('comments')}</S.TitleComments>
      <S.FormComment onSubmit={handleSubmit}>
        <S.InnerTitle ref={innerBorderRef}>
          <S.FormTitle>{t('leave_comment')}</S.FormTitle>
          <img onClick={handleChange} title="Emoji" src={emoji} alt="" />
          <Emoji
            setText={setText}
            openEmoji={openEmoji}
            position={{
              right: '37px',
              top: '0',
            }}
          />
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
          <S.CommentBox key={comment?._id}>
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
