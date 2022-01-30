import styled from 'styled-components';
import { container } from '../../CONST/mixins';
import { colors } from '../../CONST/colors';
export const S = {};

S.Header = styled.header`
  position: relative;
  ${{ ...container }};
  color: ${colors.white};
  display: flex;
  justify-content: center;
`;

S.TransformSkew = styled.div`
  position: absolute;
  z-index: -2;
  top: 130px;
  border-bottom: 30px solid rgba(29, 24, 43, 0.8);
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  transform: rotate(180deg);
  height: 0;
  width: 100%;
`;
