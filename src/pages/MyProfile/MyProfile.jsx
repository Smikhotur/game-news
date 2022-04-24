import React, { useState } from 'react';
import { SpaceGame } from '../../components/SpaceGame/SpaceGame';
import {
  cloneLocalStorage,
  getCurrentUser,
  updateLocalStorage,
} from '../../helpers/getAuthUser';
import ReactCropComponent from '../../components/ReactCropComponent/ReactCropComponent';
import { S } from './styles';
import { updateInfoUserAsync, upDateUser } from '../../redux-slices/auth-slice';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSelector } from '../../selectors/selector-auth-user';
import email from '../../assets/images/email.png';
import phone from '../../assets/images/phone.png';

const MyProfile = () => {
  const user = useSelector(getUserSelector).user;
  const [file, setSelectFile] = useState(null);
  const [base64Image, setBase64Image] = useState(null);
  const [visible, setVisible] = useState(null);
  const [textValue, setTextValue] = useState({ email: '', phoneNumber: '' });
  const dispatch = useDispatch();

  const handleFileChange = (img) => {
    setSelectFile(URL.createObjectURL(img));
  };

  const handleInput = ({ target: { name, value } }) => {
    setTextValue({ ...textValue, [name]: value });
  };

  const upDateInfoUser = async (base64) => {
    await dispatch(
      updateInfoUserAsync({
        id: getCurrentUser().user.id,
        param: { avatar: base64 },
      })
    );
    const clone = cloneLocalStorage();
    clone.user.avatar = base64;
    updateLocalStorage(clone);
    dispatch(upDateUser(clone));
    setSelectFile(null);
    setBase64Image(null);
  };

  const positionTextTop = {
    left: '0',
    top: '-15px',
  };

  const positionTextCenter = {
    left: '60px',
    top: '10px',
  };

  const submit = async () => {
    if (textValue.email.length || textValue.phoneNumber.length) {
      const forSend = {};
      for (let key in textValue) {
        if (textValue[key].length) forSend[key] = textValue[key];
      }

      await dispatch(
        updateInfoUserAsync({
          id: getCurrentUser().user.id,
          param: forSend,
        })
      );
      const clone = cloneLocalStorage();
      if (forSend?.email) clone.user.email = forSend?.email;
      if (forSend?.phoneNumber) clone.user.phoneNumber = forSend?.phoneNumber;
      console.log(clone.user);
      updateLocalStorage(clone);
      dispatch(upDateUser(clone));
      setTextValue({ email: '', phoneNumber: '' });
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Frame>
          <S.LeftBox>
            <S.InnerImage>
              {!file ? (
                <S.InputFile
                  type="file"
                  id="file"
                  onChange={({ target }) => {
                    handleFileChange(target.files[0]);
                  }}
                />
              ) : (
                !base64Image && (
                  <div>
                    <ReactCropComponent
                      setBase64Image={setBase64Image}
                      file={file}
                      upDateInfoUser={upDateInfoUser}
                    />
                  </div>
                )
              )}
              {file ? (
                base64Image ? (
                  <S.Photo src={base64Image || user?.avatar} />
                ) : null
              ) : (
                <S.Photo src={base64Image || user?.avatar} />
              )}
              <S.TextInner>
                <S.FullName>{`${user?.firstName} ${user?.lastName}`}</S.FullName>
                <S.Email>{user?.email}</S.Email>
                <S.PhoneNumber>{user?.phoneNumber}</S.PhoneNumber>
              </S.TextInner>
            </S.InnerImage>
            <S.WrapperEdit>
              <S.TitleEdit>Edit</S.TitleEdit>
              <S.Label
                position={
                  visible === 'email'
                    ? positionTextTop
                    : textValue.email
                    ? positionTextTop
                    : positionTextCenter
                }
                transform={
                  visible === 'email' ? '100%' : textValue.email ? '100%' : '0'
                }
              >
                <img src={email} alt="Phone icon" />
                <span>Email</span>
                <S.InputEmail
                  onFocus={(e) => {
                    setVisible(e.target.name);
                  }}
                  onBlur={() => {
                    setVisible(null);
                  }}
                  onChange={handleInput}
                  type="email"
                  name="email"
                  value={textValue.email}
                />
              </S.Label>
              <S.Label
                position={
                  visible === 'phoneNumber'
                    ? positionTextTop
                    : textValue.phoneNumber
                    ? positionTextTop
                    : positionTextCenter
                }
                transform={
                  visible === 'phoneNumber'
                    ? '100%'
                    : textValue.phoneNumber
                    ? '100%'
                    : '0'
                }
              >
                <img src={phone} alt="Phone icon" />
                <span>Phone number</span>
                <S.InputNumber
                  onFocus={(e) => {
                    setVisible(e.target.name);
                  }}
                  onBlur={() => {
                    setVisible(null);
                  }}
                  onChange={handleInput}
                  type="number"
                  name="phoneNumber"
                  value={textValue.phoneNumber}
                />
              </S.Label>
              <button onClick={submit} type="button">
                Send
              </button>
            </S.WrapperEdit>
          </S.LeftBox>
          <S.RightBox id="rightBox">
            <SpaceGame />
          </S.RightBox>
        </S.Frame>
      </S.Wrapper>
    </S.Container>
  );
};

export default MyProfile;
