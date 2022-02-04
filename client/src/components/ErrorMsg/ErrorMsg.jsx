import React from 'react';
import { ErrorText } from './styles';

const ErrorMsg = ({ msg, mt, fs }) => {
  return (
    <ErrorText mt={mt} fs={fs}>
      {msg}
    </ErrorText>
  );
};

export default ErrorMsg;
