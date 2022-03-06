import React, { useState } from 'react';
import SFL from '../../components/FormLogin/styles';
import S from './styles';
import userBig from '../../assets/images/userBig.png';
import { inputsData } from './inputsData';
import { useTranslation } from 'react-i18next';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import ReactCropComponent from '../ReactCropComponent/ReactCropComponent';

const FormRegistration = ({ formik }) => {
  const { t } = useTranslation(['common']);
  const [file, setSelectFile] = useState(null);
  const [base64Image, setBase64Image] = useState(null);
  const [visibleButtons, setVisibleButtons] = useState(true);

  const handleFileChange = (img) => {
    setSelectFile(URL.createObjectURL(img));
  };

  const savePhoto = () => {
    setVisibleButtons(false);
    formik.setFieldValue('file', base64Image);
  };

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.TitleRegistr>{t('registration')}</S.TitleRegistr>
      <S.InputInner>
        <S.InputBox>
          <S.InputFile
            type="file"
            id="file"
            onChange={({ target }) => {
              handleFileChange(target.files[0]);
            }}
          />
          {file ? (
            <>
              {!base64Image && (
                <ReactCropComponent
                  setBase64Image={setBase64Image}
                  file={file}
                />
              )}
              {base64Image && (
                <S.CutPicture>
                  <img src={base64Image} alt="cut image" />
                  {visibleButtons && (
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          setBase64Image(null);
                        }}
                      >
                        {t('correct')}
                      </button>
                      <button onClick={savePhoto} type="button">
                        Save
                      </button>
                    </div>
                  )}
                </S.CutPicture>
              )}
            </>
          ) : (
            <S.LabelForm htmlFor="file" title="Click">
              <img src={userBig} alt="file-icon" />
              <div>{t('add_a_photo')}</div>
            </S.LabelForm>
          )}
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
