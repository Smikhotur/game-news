import styled from 'styled-components';

export const ErrorText = styled.p`
  color: red;
  font-size: ${({ fs }) => fs ?? '12px'};
  margin-top: ${({ mt }) => mt ?? '5px'};

  &:first-letter {
    text-transform: uppercase;
  }
`;
