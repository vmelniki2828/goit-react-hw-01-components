import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css'
import clsx from 'clsx';

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className={styles.friend__item}>
      <span  className={isOnline ? clsx(styles.online) : clsx(styles.offline)}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  text: PropTypes.string,
};

export default FriendListItem;
