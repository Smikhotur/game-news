import styled from 'styled-components';
import { colors } from '../../CONST/colors';
// import { Link } from 'react-router-dom';

const S = {};

S.TitleRegistr = styled.h4`
  margin: 25px 0;
  color: ${colors.white};
  font-size: 48px;
  text-align: center;
  font-weight: 700;
`;

S.Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 170px 10px 0;
`;

S.InputInner = styled.section`
  display: flex;
  width: 100%;
  max-width: 700px;
  gap: 15px;
`;

S.InputBox = styled.div`
  width: 100%;

  &:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > span {
    color: ${colors.white};
    margin-left: 20px;
  }
`;

S.InputFile = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

S.CutPicture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    border-radius: 50%;
  }

  > div {
    > button {
      color: #fff;
      font-size: 13px;
      background: rgba(29, 24, 43, 0.8);
      border: none;
      border-radius: 2px;
      margin-top: 15px;
      padding: 5px 25px;
      text-transform: capitalize;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
`;

S.LabelForm = styled.label`
  text-align: center;

  > img {
    max-width: 175px;
    cursor: pointer;
  }
`;

S.ButtonSubmit = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 147px;
  min-height: 41px;
  color: ${colors.white};
  font-size: 13px;
  background: #e53637;
  font-weight: 700;
  border: none;
  border-radius: 2px;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 12px 30px;
  margin: 30px;
`;

S.InnerSpinner = styled.div`
  position: absolute;
`;

export default S;
