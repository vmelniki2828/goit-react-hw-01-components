import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
  return (
    <>
      <table className={styles.transaction__history}>
        <thead>
          <tr className={styles.head}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({id, type, amount, currency}) => {
            return (
              <tr className={styles.line} key={id}>
                <td className={styles.type}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;
