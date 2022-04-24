import styled from 'styled-components';
import '../../assets/font.css';
import { container } from '../../CONST/mixins';
import { colors } from '../../CONST/colors';
import space from '../../assets/images/space.jpg';
import spaceStart from '../../assets/images/spaceStart.jpg';
import { devices } from '../../CONST/break-point';

export const S = {};

S.Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: calc(100vh - 380px);
`;

S.Wrapper = styled.section`
  position: relative;
  ${{ ...container }};
  color: ${colors.white};
  padding: 200px 0 180px;
  margin: 0 72px;
  min-height: calc(100vh - 180px);

  @media ${devices.mobileXL} {
    padding: 200px 0 120px;
    min-height: calc(100vh - 120px);
    margin: 0 25px;
  }
`;

S.Frame = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  min-height: calc(100vh - 380px);

  @media ${devices.laptopXL} {
    flex-direction: column;
  }
`;

S.LeftBox = styled.div`
  padding: 10px;
  width: 100%;

  @media ${devices.laptopXL} {
    display: flex;
    justify-content: space-between;
  }

  @media ${devices.laptop} {
    flex-direction: column;
  }
`;

S.InnerImage = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  > div {
    max-width: 350px;
    margin-right: 10px;

    @media ${devices.mobileXL} {
      text-align: center;
    }
  }

  @media ${devices.mobileXL} {
    flex-direction: column;
    align-items: center;
  }
`;

S.InputFile = styled.input`
  opacity: 0;
  /* visibility: hidden; */
  position: absolute;
  cursor: pointer;
  top: -33px;
  left: -33px;
  z-index: 5;
  width: 214px;
  height: 214px;

  @media ${devices.mobileXL} {
    left: calc(50% - 107px);
  }
`;

S.Photo = styled.img`
  max-width: 215px;
  position: relative;
  bottom: 33px;
  right: 33px;
  border-radius: 8px;

  @media ${devices.mobileXL} {
    right: 0;
  }
`;

S.TextInner = styled.div`
  letter-spacing: 2px;
`;

S.FullName = styled.div`
  font-size: 24px;
  color: ${colors.orange};
  text-transform: capitalize;
`;

S.Email = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;

S.PhoneNumber = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;

S.RightBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  min-width: 525px;
  height: 475px;
  margin: 10px;
  background-image: url(${spaceStart});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  > canvas {
    background-image: url(${space});
    background-size: cover;
    border-radius: 10px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    > button {
      background-color: #3dd1e7;
      border: 0 solid #e5e7eb;
      box-sizing: border-box;
      color: #000000;
      display: flex;
      font-family: ui-sans-serif, system-ui, -apple-system, system-ui,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      font-size: 1rem;
      font-weight: 700;
      justify-content: center;
      line-height: 1.75rem;
      padding: 0.75rem 1.65rem;
      position: relative;
      text-align: center;
      text-decoration: none #000000 solid;
      text-decoration-thickness: auto;
      width: 50%;
      max-width: 460px;
      position: relative;
      cursor: pointer;
      transform: rotate(-2deg);
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;

      &:focus {
        outline: 0;
      }

      &:after {
        content: '';
        position: absolute;
        border: 1px solid #000000;
        bottom: 4px;
        left: 4px;
        width: calc(100% - 1px);
        height: calc(100% - 1px);
      }

      &:hover:after {
        bottom: 2px;
        left: 2px;
      }

      @media (min-width: 768px) {
        padding: 0.75rem 3rem;
        font-size: 1.25rem;
      }
    }
  }

  @media ${devices.tablet} {
    display: none;
  }
`;

S.StopBtn = styled.button`
  position: absolute;
  text-transform: uppercase;
  bottom: 15px;
  left: 20px;
  border-bottom: 1px solid ${colors.orange};
  cursor: pointer;
  background-color: ${colors.transparent};
  color: ${colors.white};

  &:hover {
    color: ${colors.orange};
    border-bottom: 1px solid ${colors.white};
  }
`;

S.SoundBtn = styled.div`
  position: absolute;
  text-transform: uppercase;
  top: 15px;
  right: 20px;
  cursor: pointer;

  &:hover {
    color: ${colors.orange};
  }
`;

S.WrapperEdit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px 180px;

  > button {
    padding: 6px 12px;
    margin-top: 25px;
    border-radius: 8px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.6s ease-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media ${devices.laptopXL} {
    padding: 0 25px 25px;
    width: 100%;
  }

  @media ${devices.laptop} {
    padding: 25px;
    width: 100%;
  }
`;

S.TitleEdit = styled.div`
  color: ${colors.greyOpacity};
  font-size: 24px;
`;

S.Label = styled.label`
  position: relative;
  width: 100%;
  margin-top: 20px;

  > img {
    position: absolute;
    left: 0;
    bottom: 8px;
    width: 25px;
  }

  > span {
    position: absolute;
    ${({ position }) => position};
    transition: all 0.5s ease-out;
    color: ${colors.white};
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    background-color: ${colors.orange};
    height: 2px;
    bottom: 0;
    transform: scale(${({ transform }) => transform});
    transform-origin: center center;
    transition: transform 0.5s;
  }
`;

S.InputEmail = styled.input`
  color: ${colors.greyOpacity};
  padding: 10px 10px 10px 35px;
  background-color: ${colors.transparent};
  border-bottom: 2px solid ${colors.greyOpacity};
  width: 100%;
  outline: none;
`;

S.InputNumber = styled.input`
  color: ${colors.greyOpacity};
  padding: 10px 10px 10px 35px;
  background-color: ${colors.transparent};
  border-bottom: 2px solid ${colors.greyOpacity};
  width: 100%;
  outline: none;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  &:hover {
    -moz-appearance: number-input;
  }
  &:focus {
    -moz-appearance: number-input;
  }
`;
