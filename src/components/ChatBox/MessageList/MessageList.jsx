import React from 'react';
import { format } from 'timeago.js';
import { colors } from '../../../CONST/colors';
import { S } from '../styles';

export const MessageList = ({ messeges, avatar, scrollRef }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      {messeges.map((sms) => (
        <S.RefScroll key={sms?._id} ref={scrollRef}>
          {sms.sender === currentUser?.user.id ? (
            <S.SmsBoxLeft>
              <S.SmsAvatar src={currentUser?.user.avatar} />
              <S.SmsText
                color={
                  sms.sender === currentUser?.user.id
                    ? colors.white
                    : colors.blue
                }
              >
                {sms.text}
              </S.SmsText>
              <S.SmsData>{format(sms?.createdAt)}</S.SmsData>
            </S.SmsBoxLeft>
          ) : (
            <S.SmsBoxRight>
              <S.SmsData>{format(sms?.createdAt)}</S.SmsData>
              <S.SmsText
                color={
                  sms.sender === currentUser?.user.id
                    ? colors.white
                    : colors.blue
                }
              >
                {sms.text}
              </S.SmsText>
              <S.SmsAvatar src={avatar} />
            </S.SmsBoxRight>
          )}
        </S.RefScroll>
      ))}
    </>
  );
};
