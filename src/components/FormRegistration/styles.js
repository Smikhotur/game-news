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

S.LabelForm = styled.label`
  > img {
    max-width: 175px;
    cursor: pointer;
  }
`;

S.ButtonSubmit = styled.button`
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

export default S;
