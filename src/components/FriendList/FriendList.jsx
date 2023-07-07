import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import styles from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={styles.friend__list}>
        {friends.map(friend => {
          return (
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              key={friend.id}
            />
          );
        })}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  text: PropTypes.string,
};

export default FriendList;
