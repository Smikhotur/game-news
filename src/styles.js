import styled from 'styled-components';
export const S = {};

S.Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  > div {
    min-height: 100%;
  }
`;

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

S.ContainerFooter = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  /* background-color: rgba(29, 24, 43, 0.8); */

  > div {
    position: absolute;
    left: 0;
    right: 0;
    background-color: rgba(29, 24, 43, 0.8);
    width: 100%;
    height: 100%;
  }
`;
