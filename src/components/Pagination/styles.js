import styled from 'styled-components';
import { colors } from '../../CONST/colors';

export const S = {};

S.InnerPagination = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 10px;
`;

S.ButtonPaginaation = styled.div`
  width: 30px;
  height: 30px;
  background: rgb(11, 12, 42);
  color: ${({ color }) => color};
  text-align: center;
  line-height: 30px;
`;

S.LeftArrow = styled.div`
  width: 15px;
  height: 15px;
  border-left: 2px solid ${colors.orange};
  border-bottom: 2px solid ${colors.orange};
  transform: rotate(45deg);

  &:hover {
    border-left: 2px solid ${colors.white};
    border-bottom: 2px solid ${colors.white};
    cursor: pointer;
    transition: all 0.4s;
  }
`;

S.RightArrow = styled.div`
  width: 15px;
  height: 15px;
  transform: rotate(-45deg);
  border-right: 2px solid ${colors.orange};
  border-bottom: 2px solid ${colors.orange};

  &:hover {
    border-right: 2px solid ${colors.white};
    border-bottom: 2px solid ${colors.white};
    cursor: pointer;
    transition: all 0.4s;
  }
`;

S.AllPage = styled.div`
  text-align: center;
  color: rgb(11, 12, 42);
`;
