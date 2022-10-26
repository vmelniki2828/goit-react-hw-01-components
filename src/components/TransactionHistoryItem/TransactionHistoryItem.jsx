import PropTypes from 'prop-types';
import { TransactionTd, TransactionTr } from './TransactionHistoryItem.styled';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TransactionTr>
      <TransactionTd>{type}</TransactionTd>
      <TransactionTd>{amount}</TransactionTd>
      <TransactionTd>{currency}</TransactionTd>
    </TransactionTr>
  );
};

export default TransactionHistoryItem;
TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};