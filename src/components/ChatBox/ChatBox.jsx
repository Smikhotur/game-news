import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { S } from './styles';

export const ChatBox = ({ currentChat, messeges, avatar }) => {
  const { t } = useTranslation(['common']);
  const [text, setText] = useState('');
  const currentUser = JSON.parse(localStorage.getItem('user'));

  const addText = ({ target: { value } }) => {
    setText(value);
  };

  return (
    <S.ChatBox>
      <S.Title>{t('messenger')}</S.Title>
      {currentChat ? (
        <>
          <S.ChatInner>
            {messeges.map((sms) => {
              return sms.sender === currentUser?.user.id ? (
                <S.SmsBoxLeft key={sms?._id}>
                  <S.SmsAvatar src={currentUser?.user.avatar} />
                  <S.SmsText color={sms.sender === currentUser?.user.id}>
                    {sms.text}
                  </S.SmsText>
                  <S.SmsData>{sms?.createdAt}</S.SmsData>
                </S.SmsBoxLeft>
              ) : (
                <S.SmsBoxRight key={sms?._id}>
                  <S.SmsData>{sms?.createdAt}</S.SmsData>
                  <S.SmsText color={sms.sender === currentUser?.user.id}>
                    {sms.text}
                  </S.SmsText>
                  <S.SmsAvatar src={avatar} />
                </S.SmsBoxRight>
              );
            })}
          </S.ChatInner>
          <S.InnerTitle>
            <S.Text
              onChange={addText}
              value={text}
              placeholder={t('write_comments')}
            />
            <S.Button type="submmit">Send</S.Button>
          </S.InnerTitle>
        </>
      ) : (
        <S.ChatInnerNull>{t('chat')}</S.ChatInnerNull>
      )}
    </S.ChatBox>
  );
};
