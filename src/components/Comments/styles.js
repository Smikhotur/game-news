import styled from 'styled-components';
import { colors } from '../../CONST/colors';
import '../../assets/font.css';
// import { devices } from '../../CONST/break-point';

export const S = {};

S.WrapperComments = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px 0;
`;

S.TitleComments = styled.section`
  font-family: assassin-st, sans-serif;
  font-size: 28px;
  color: ${colors.orange};
  letter-spacing: 2px;
`;

S.FormComment = styled.form`
  width: 100%;
  max-width: 1000px;
  border: 2px solid ${colors.blackOpaciry};
  border-radius: 15px;
  padding: 15px 25px;
  margin-top: 20px;
`;

S.InnerTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.orange};
  padding-bottom: 15px;

  &:last-child {
    border-bottom: none;
    margin-top: 10px;
  }

  > img {
    cursor: pointer;
  }
`;

S.FormTitle = styled.div`
  color: ${colors.white};
`;

S.Text = styled.textarea`
  width: 100%;
  color: ${colors.white};
  padding: 10px 0;
  background-color: ${colors.transparent};
  border: none;
  outline: none;
  resize: none;
`;

S.Button = styled.button`
  color: ${colors.white};
  border: 1px solid ${colors.blackOpaciry};
  background-color: ${colors.transparent};
  border-radius: 5px;
  align-self: center;
  padding: 5px 15px;

  &:hover {
    background-color: ${colors.orange};
    border: 1px solid ${colors.orange};
    cursor: pointer;
  }
`;

S.InnerComment = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 30px 0 0;
`;
S.CommentBox = styled.div`
  display: flex;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

S.Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

S.Comment = styled.div`
  margin-left: 30px;
  width: 100%;
`;
S.CommentAutorInner = styled.div`
  position: relative;
  top: 2px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px 20px;
  background-color: ${colors.blackOpaciry};
  border: 2px solid ${colors.blackOpaciry};
  color: ${colors.orange};

  &::before {
    content: '';
    position: absolute;
    left: -16px;
    top: 15px;
    display: block;
    width: 30px;
    height: 30px;
    background-color: ${colors.blackOpaciry};
    transform: rotate(-45deg);
  }

  &::after {
    content: '';
    position: absolute;
    left: -32px;
    bottom: -9px;
    display: block;
    width: 30px;
    height: 30px;
    background-color: ${colors.grey};
    /* transform: rotate(-45deg); */
  }
`;
S.CommentAutor = styled.div``;
S.CommentData = styled.div``;
S.DivTransform = styled.div`
  position: absolute;
  bottom: -12px;
  left: 25px;
  width: 20px;
  height: 20px;
  background-color: ${colors.colorText};
  transform: rotate(-45deg);
`;
S.CommentText = styled.div`
  padding: 10px 15px;
  border: 2px solid ${colors.colorText};
  background-color: ${colors.colorText};
  color: ${colors.white};
`;
