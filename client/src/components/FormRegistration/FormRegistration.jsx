import React from 'react';
import SFL from '../../components/FormLogin/styles';
import S from './styles';
import userBig from '../../assets/images/userBig.png';
import { inputsData } from './inputsData';
import { useTranslation } from 'react-i18next';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

const FormRegistration = ({ formik }) => {
  const { t } = useTranslation(['common']);
  console.log(formik);

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.TitleRegistr>{t('registration')}</S.TitleRegistr>
      <S.InputInner>
        <S.InputBox>
          <S.InputFile
            type="file"
            id="file"
            onChange={(event) => {
              const files = event.target.files;
              let myFiles = Array.from(files);
              formik.setFieldValue('profile', myFiles);
            }}
            multiple
          />
          <S.LabelForm htmlFor="file" title="Click">
            <img src={userBig} alt="" />
          </S.LabelForm>
        </S.InputBox>
        <S.InputBox>
          {inputsData.map((input, key) => (
            <SFL.LabelEmail htmlFor="" key={key}>
              <SFL.InputEmail
                type={input.type}
                name={input.name}
                value={formik.values[input.name]}
                onChange={formik.handleChange}
                placeholder={t(input.placeholder)}
              />
              <img src={input.icon} alt="icon" />
              {formik.errors[input.name] ? (
                <ErrorMsg msg={t(formik.errors[input.name])} />
              ) : (
                ''
              )}
            </SFL.LabelEmail>
          ))}
          <input type="checkbox" />
          <span>{t('checked_agreed')}</span>
        </S.InputBox>
      </S.InputInner>
      <S.ButtonSubmit type="submit">Submit</S.ButtonSubmit>
    </S.Form>
  );
};

export default FormRegistration;
