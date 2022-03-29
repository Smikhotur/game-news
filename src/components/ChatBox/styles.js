import styled from 'styled-components';
import '../../assets/font.css';
import { colors } from '../../CONST/colors';
// import { devices } from '../../CONST/break-point';

export const S = {};

S.ChatBox = styled.div`
  width: calc(100% - 360px);
  color: ${colors.white};
`;

S.Title = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.menuMesseng};
  width: 100%;
  height: 65px;
  color: ${colors.white};
  font-family: assassin-st, sans-serif;
  padding: 0 20px;
  letter-spacing: 2px;
  font-size: 28px;
`;

S.ChatInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${colors.whiteOpacity};
  width: 100%;
  color: ${colors.white};
  padding: 10px 20px;
  letter-spacing: 1.5px;
  height: calc(100vh - 431px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

S.ChatInnerNull = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${colors.whiteOpacity};
  width: 100%;
  color: ${colors.white};
  padding: 10px 20px;
  letter-spacing: 1.5px;
  height: calc(100vh - 368px);
`;

S.SmsBoxLeft = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 15px;
`;

S.SmsBoxRight = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 15px;
`;

S.SmsAvatar = styled.img`
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

S.SmsText = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ color }) => (color ? colors.white : colors.blue)};
  padding: 14px 25px;
  border-radius: 8px;
  color: ${colors.blackBlue};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

S.SmsData = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

S.InnerTitle = styled.div`
  position: relative;
  display: flex;
  background-color: ${colors.whiteOpacity};
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-top: 1px solid ${colors.greyOpacity};
`;

S.Text = styled.textarea`
  position: relative;
  width: 100%;
  color: ${colors.white};
  padding: 10px 15px 10px 0;
  background-color: ${colors.transparent};
  border: none;
  outline: none;
  resize: none;

  &::placeholder {
    padding-top: 10px;
    position: absolute;
    left: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    &::placeholder {
      color: ${colors.transparent};
    }
  }
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
