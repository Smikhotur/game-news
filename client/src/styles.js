import styled from 'styled-components';
export const S = {};

S.Wrapper = styled.div``;

S.Container = styled.section`
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  top: 0;

  > div {
    position: absolute;
    left: 0;
    right: 0;
    background-color: rgba(29, 24, 43, 0.8);
    width: 100%;
    height: 130px;
  }
`;
