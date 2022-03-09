import styled from 'styled-components';
import { container } from '../../CONST/mixins';

export const S = {};

S.ContainerDetails = styled.section`
  ${{ ...container }};
`;

S.InnerDetails = styled.div`
  min-height: 100vh;
  padding: 180px 0;
`;
