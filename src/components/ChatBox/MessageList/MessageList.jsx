import React, { useState } from 'react';
import { format } from 'timeago.js';
import { colors } from '../../../CONST/colors';
import dotsImages from '../../../assets/images/dots.png';
import { S } from '../styles';
import { left, marginLeft, marginRight, right } from '../../../CONST/mixins';
import { useTranslation } from 'react-i18next';
import editImg from '../../../assets/images/edit.png';
import removeImg from '../../../assets/images/remove.png';
// import { deleteMessageAsync } from '../../../services/messenger-service';
// import { HTTP_REQUEST_STATUS } from '../../../CONST/http-request-status';
// import { setMesseges } from '../../../redux-slices/messenger-slice';
import { getCurrentUser } from '../../../helpers/getAuthUser';

export const MessageList = ({
  messeges,
  avatar,
  scrollRef,
  updateMessage,
  removeMessage,
}) => {
  const [openSmsMenu, setOpenSmsMenu] = useState(false);
  const [idMessage, setIdMessage] = useState('');
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const { t } = useTranslation(['common']);

  return (
    <>
      {messeges.map((sms) => (
        <S.RefScroll
          direction={
            sms.sender === currentUser?.user.id ? 'row' : 'row-reverse'
          }
          key={sms._id}
          ref={scrollRef}
        >
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
              <S.SmsData position={'left: 0'}>
                {format(sms?.createdAt)}
              </S.SmsData>
            </S.SmsBoxLeft>
          ) : (
            <S.SmsBoxRight>
              <S.SmsData position={'right: 0'}>
                {format(sms?.createdAt)}
              </S.SmsData>
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
          <S.SmsMenuInner
            margin={
              sms.sender === currentUser?.user.id ? marginRight : marginLeft
            }
            onMouseLeave={() => setOpenSmsMenu(false)}
          >
            <S.DotsImg
              onClick={() => {
                setOpenSmsMenu(!openSmsMenu);
                setIdMessage(sms._id);
              }}
              src={dotsImages}
            />
            {openSmsMenu && idMessage === sms._id && (
              <S.SmsMenu
                position={sms.sender === currentUser?.user.id ? right : left}
              >
                {sms.sender === getCurrentUser().user.id && (
                  <div
                    onClick={() => {
                      setOpenSmsMenu(false);
                      updateMessage(sms.text, sms._id);
                    }}
                  >
                    <span>{t('edit')}</span>
                    <img src={editImg} alt="edit icon" />
                  </div>
                )}
                <div
                  onClick={() => {
                    setOpenSmsMenu(false);
                    removeMessage(sms._id);
                  }}
                >
                  <span>{t('delete')}</span>
                  <img src={removeImg} alt="delete icon" />
                </div>
              </S.SmsMenu>
            )}
          </S.SmsMenuInner>
        </S.RefScroll>
      ))}
    </>
  );
};
