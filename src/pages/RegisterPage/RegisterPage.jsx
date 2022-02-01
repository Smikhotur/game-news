import React from 'react';
import { useTranslation } from 'react-i18next';
import SLOGIN from '../LoginPage/styles';
import SFL from '../../components/FormLogin/styles';
import S from './styles';
import userBig from '../../assets/images/userBig.png';
import { inputsData } from './inputsData';

const RegisterPage = () => {
  const { t } = useTranslation(['common']);

  // const [initialValueLogin] = useState({
  //   email: '',
  //   password: '',
  // });

  // const handleSubmitLogin = () => {};

  return (
    <SLOGIN.ContainerInner>
      <S.Form>
        <S.TitleRegistr>{t('registration')}</S.TitleRegistr>
        <S.InputInner>
          <S.InputBox>
            <S.InputFile type="file" id="file" />
            <S.LabelForm htmlFor="file" title="Click">
              <img src={userBig} alt="" />
            </S.LabelForm>
          </S.InputBox>
          <S.InputBox>
            {inputsData.map((input, key) => (
              <SFL.LabelEmail htmlFor="" key={key}>
                <SFL.InputEmail
                  type={input.type}
                  placeholder={t(input.placeholder)}
                />
                <img src={input.icon} alt="icon" />
              </SFL.LabelEmail>
            ))}
            <input type="checkbox" />
            <span>{t('checked_agreed')}</span>
          </S.InputBox>
        </S.InputInner>
        <S.ButtonSubmit>Submit</S.ButtonSubmit>
      </S.Form>
    </SLOGIN.ContainerInner>
  );
};

export default RegisterPage;
