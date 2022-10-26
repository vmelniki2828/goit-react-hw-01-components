import styled from 'styled-components';

export const TransactionTr = styled.tr`
  &:nth-child(even) {
    background-color: #d0ecff;
  }
`;

export const TransactionTd = styled.td`
  padding: 20px;
  outline: 1px solid #8080802b;
  text-transform: capitalize;
  font-size: 15px;
`;