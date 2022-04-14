import React from 'react';
import { useSelector } from 'react-redux';
import { ROUTE_MESSENGER } from '../../CONST/list-local-routs/list-routes-public';
import { getUnreadSelector } from '../../selectors/selector-messenger';
import { S } from './styles';
import sms from '../../assets/sms.ogg';
import ReactAudioPlayer from 'react-audio-player';

export const Unread = () => {
  const unread = useSelector(getUnreadSelector);

  const cropText = (message) => {
    return message.text.slice(0, 16) + '...';
  };

  return (
    <>
      {unread.length > 0 && (
        <S.UnreadInner>
          <S.UnreadList>
            {unread.map((message) => (
              <S.UnreadItem
                key={message.createdAt}
                to={`${ROUTE_MESSENGER.path}/${message?.receiverId}`}
              >
                <ReactAudioPlayer src={sms} autoPlay />
                <S.UnreadImage src={message.avatar} />
                <S.UnreadText>
                  {(message.text.length > 15 && cropText(message)) ||
                    message.text}
                </S.UnreadText>
              </S.UnreadItem>
            ))}
          </S.UnreadList>
        </S.UnreadInner>
      )}
    </>
  );
};
