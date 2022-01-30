import styled from 'styled-components';
import { container } from '../../CONST/mixins';
import { colors } from '../../CONST/colors';
export const S = {};

S.Header = styled.header`
  ${{ ...container }};
  color: ${colors.white};
`;
