import React, { useState } from 'react';
import { S } from './styles';
import robot404 from '../../assets/images/error404.png';
import { useDispatch } from 'react-redux';
import { sendErrorMessageAsync } from '../../services/messenger-service';
import { getCurrentUser } from '../../helpers/getAuthUser';
import { useTranslation } from 'react-i18next';
import { BallTriangle } from 'react-loader-spinner';

const Page404 = () => {
  const { t } = useTranslation(['common']);
  const [sms, setSMS] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();

  const sentError = () => {
    setSpinner(true);

    (async () => {
      const res = await dispatch(
        sendErrorMessageAsync(getCurrentUser().user.email)
      );

      setSMS(res.payload);
    })();
  };

  return (
    <S.Wrapper>
      <S.Inner>
        <S.TextError>
          <S.Title>404</S.Title>
          <S.Subtitle>Page not found</S.Subtitle>
        </S.TextError>
        <S.Image src={robot404}></S.Image>
      </S.Inner>
      {sms ? (
        <div>{t(sms.link)}</div>
      ) : spinner ? (
        <BallTriangle color="#211d2e" height={30} width={30} />
      ) : (
        <button onClick={sentError} type="button">
          Send message
        </button>
      )}
    </S.Wrapper>
  );
};

export default Page404;
