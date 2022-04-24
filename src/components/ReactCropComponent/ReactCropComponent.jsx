import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCroppedImg } from '../../helpers/getCroppedImg';
import ReactCrop from 'react-image-crop';
import { S } from './styles';
import 'react-image-crop/dist/ReactCrop.css';

const ReactCropComponent = ({
  setBase64Image,
  file,
  upDateInfoUser = () => {},
}) => {
  const { t } = useTranslation(['common']);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });

  return (
    <S.OriginalPicture>
      <ReactCrop
        src={file}
        onImageLoaded={setImage}
        crop={crop}
        onChange={setCrop}
      />
      <button
        type="button"
        onClick={() => {
          setBase64Image(getCroppedImg(image, crop));
          upDateInfoUser(getCroppedImg(image, crop));
        }}
      >
        {t('apply')}
      </button>
      <div>{t('select_area_with_mouse')}</div>
    </S.OriginalPicture>
  );
};

export default ReactCropComponent;
